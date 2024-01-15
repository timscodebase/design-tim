---
title: Converting a Qwik AI app to Sveltekit
description: The journey from Qwik to Svelte -  Converting an AI App
date: '2024-01-13'
categories:
  - sveltekit
  - svelte
  - qwik
  - openai
  - typescript
  - tailwindcss
published: true
image: https://res.cloudinary.com/tithos/image/upload/c_scale,f_auto,q_auto:eco,w_1000/v1705258344/article-banner-small_xxepf8.png
thumb: https://res.cloudinary.com/tithos/image/upload/c_scale,f_auto,q_auto:eco,w_400/v1705258344/article-banner-small_xxepf8.png
---

I recently completed an excellent AI tutorial by Austin Gil.  I highly suggest you check it out: AI for Web Devs.  "I thought it would be cool to build an app that takes two opponents and uses AI to determine who would win in a hypothetical fight. It provides some explanation and the option to create an AI-generated image. Sometimes the results come out a little wonky, but that’s what makes it fun."  Austin goes into depth about how to connect to the OpenAI API with out using an npm module, how to use the HTML Stream API, AI prompt engineering, and AI image generation.  It was a fun journey!

Here is Austin's tutorial: [https://www.austingil.com/blog/ai-for-web-devs/](https://austingil.com/ai-for-web-devs-set-up/)

Austin wrote his app with Qwik, which is a new kind of web framework that can deliver instant loading web applications at any size or complexity.  Personally, I have nothing against Qwik.  In fact, during the tutorial, I found it rather interesting.  Maybe I will dig further into it later with another project.  Svelte, however is my bag.  So, I decided to covert Austin’s app to SvelteKit.

## Small Pieces

My first step was to analyze his existing code and look for the small pieces.  In most JavaScript frameworks, these are typically components or exportable utility functions.  Upon inspection, I found the following project structure:

<pre>
  src/
  …

    root.ts

    utils.ts

    components/

        Input.tsx

        Dialog.jsx

        Index.js

        Svg.jsx

        router-head/

          router-head.tsx

    routes/

        fighters.js

        index.tsx

        layout.tsx

        service-worker.ts

        ai-image/

          index.js
</pre>

Looking at this folder structure, I see a components folder.  That is where I choice to start.

Here is what the original Input.tsx file:

```tsx
  import { component$ } from "@builder.io/qwik";
  import { randomString } from "~/utils.js";

  /**
  * @typedef {import('@builder.io/qwik').QwikIntrinsicElements['textarea']} TextareaAttributes
  */

  /**
  * @type {Component<TextareaAttributes  & {
  * label: string,
  * name: string,
  * id?: string,
  * value?: string
  * }>}
  */
  export default component$((props) => {
    const id = props.id || randomString(8)

    return (
      <div>
        <label for={id}>{props.label}</label>
        <textarea id={id} {...props}>
          {/** @type {undefined} */ (props.value)}
        </textarea>
      </div>
    )
  })
```

This was the easiest file to convert as it is a simple UI component.  Svelte shines in this arena.  Here is my version:

```tsx
  <script lang="ts">
    export let label: string
    export let name: string
    export let value: string
    export let className: string
  </script>

  <div>
    <label class={className} for={name}>{label}</label>
    <textarea required maxLength={100} {name}>
        {value}
    </textarea>
  </div>
```

As you can see, the code is very very similar.  I will let you decide which version you like better. ;)

It got a lot more complex when I got to the Dialog.tsx component.  Here is the original:

```tsx
import { Slot, component$, $, useSignal, useStore, useTask$, useVisibleTask$ } from "@builder.io/qwik";
import { randomString } from "~/utils.js";

  /**
  * @typedef {HTMLAttributes<HTMLDialogElement>} DialogAttributes
  */

  /**
  * @type {Component<DialogAttributes  & {
  * toggle: string|false,
  * open?: Boolean,
  * onClose$?: import('@builder.io/qwik').PropFunction<() => any>
  * }>}
  */
  export default component$(({ toggle, open, onClose$, ...props }) => {
    const id = props.id || randomString(8)

    const dialogRef = useSignal()
    const state = useStore({
      isOpen: false,
    })

    useTask$(({ track }) => {
      track(() => state.isOpen)

      const dialog = dialogRef.value
      if (!dialog) return

      if (state.isOpen) {
        dialog.showModal()
      } else {
        dialog.close()
        onClose$ && onClose$()
      }
    })
    useVisibleTask$(({ track }) => {
      track(() => open)
      state.isOpen = open || false
    })

    const handleDialogClick = $((/** @type {MouseEvent} */ event) => {
      const target = /** @type {HTMLDialogElement} */ (event.target)
      if (target.localName !== 'dialog') return
      state.isOpen = false
    })

    return (
      <div>
        {toggle && (
          <button aria-controls={id} aria-expanded={state.isOpen} onClick$={() => state.isOpen = true}>
            {toggle}
          </button>
        )}

        <dialog
          ref={dialogRef}
          id={id}
          onClick$={handleDialogClick}
          onClose$={() => state.isOpen = false}
          {...props}
        >
          <div class="p-2">
            <Slot></Slot>
          </div>
        </dialog>
      </div>
    )
  })
```

And mine, in Svelte:

```tsx
  <script lang="ts">
    import { onMount } from 'svelte'
    import { randomString } from '$lib'
    export let id = randomString(8)
    export let toggle: string | false
    export let open: boolean = false
    export let onClose: () => {}

    let dialogRef: HTMLDialogElement | null
    let isOpen = false

    onMount(() => {
        id = randomString(8)
        dialogRef = document.querySelector(`.dialog`)

        if (isOpen) {
          dialogRef?.showModal()
        }

        return () => {
          if (isOpen) {
      dialogRef?.close()
      onClose && onClose()
    }
        }
    })

    let handleDialogClick = (event) => {
        const target = event.target
        if (target.localName !== 'dialog') return
        isOpen = false
    }
  </script>

  <div>
    {#if toggle}
        <button aria-controls={id} aria-expanded={isOpen} on:click={() => (isOpen = true)}>
          {toggle}
        </button>
    {/if}

    <dialog
        class="dialog"
        bind:this={dialogRef}
        {id}
        on:click={handleDialogClick}
        on:close={() => (isOpen = false)}
    >
        <div class="p-2">
  <slot />
        </div>
    </dialog>
  </div>
```

The challenge I faced converting this file was the fact that Svelte dose not have useVisibleTask or useTask.  I had to figure out what it did in Qwik and what the Svelte equivalent would be.  Turns out, they are similar to React's useEffect and Svelte's onMount.  useVisibleTask and useTask are lifecycle method that can be used to track state changes.  Once I learn that, the rest was easy.

## The Bigger Picture

The bulk of the UI and "functionality" of the app takes place the index.tsx and ai-image/index.js files.   I am going to focus on the "functionality" part.  The index file is very large, so I will only show the good parts. If you you want to see the complete original code check out [Austin Gil's Repo](https://github.com/AustinGil/versus).  My code is incomplete but, you can find the repo here: [ai-svelte-tiger](https://github.com/timscodebase/ai-svelte-tiger)

### index.tsx

The index file has four major functions that do most of the work in the app

```tsx
onPost: RequestHandler

const promptTemplate = new PromptTemplate({
  template: template,
  inputVariables: ['opponent1', 'opponent2'],
})

export const onPost: RequestHandler = async (requestEvent) => {
  const formData = await requestEvent.parseBody()

  const validation = z.object({
    opponent1: z.string().min(1).max(60),
    opponent2: z.string().min(1).max(60),
  }).safeParse(formData)

  if (!validation.success) {
    requestEvent.json(400, {
      errors: validation.error.issues
    })
    return
  }

  const openai = new OpenAI({
    apiKey: requestEvent.env.get('OPENAI_API_KEY'),
  });

  const prompt = await promptTemplate.format({
    opponent1: validation.data.opponent1,
    opponent2: validation.data.opponent2
  })

  const response = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-3.5-turbo",
    max_tokens: 300,
    temperature: 1,
    stream: true
  });

  const writer = requestEvent.getWritableStream().getWriter()
  const encoder = new TextEncoder()

  for await (const chunk of response) {
    const text = chunk.choices[0].delta.content || ''
    writer.write(encoder.encode(text))
  }
  writer.close();
}
```

This is where I am currently stuck.  I have not yet found a Svelte equivalent for:

const writer = requestEvent.getWritableStream().getWriter()
Austin warned me that this part would be tricky, but I know that Svelte has a Stream API and I'm sure I can probably  also look into the native library to solve the problem.

### handleSubmit

```tsx
const handleSubmit = $(async (event: QwikSubmitEvent) => {
    state.isLoading = true
    state.text = ''
    state.winner = ''

    const form = event.target as HTMLFormElement

    const response = await jsFormSubmit(form)

    if (!response.ok) {
      state.isLoading = false
      alert("The request experienced an issue.")
      return
    }

    if (!response.body) {
      state.isLoading = false
      return
    }

    // Parse streaming body
    const reader = response.body.getReader()
    const decoder = new TextDecoder()
    let isStillStreaming = true

    while(isStillStreaming) {
      const {value, done} = await reader.read()
      const chunkValue = decoder.decode(value)

      state.text += chunkValue

      isStillStreaming = !done
    }

    const winnerPattern = /winner:\s+(\w+).*/gi
    const match = winnerPattern.exec(state.text)

    state.winner = match?.length ? match[1].toLowerCase() : ''

    if (state.winner) {
      const winnerInput = document.querySelector(`textarea[name=${state.winner}]`)
      if (winnerInput) {
        party.confetti(winnerInput as DynamicSourceType, {
          count: 40,
          size: 2,
          spread: 15
        })
      }
    }

    state.isLoading = false
  })
```

### pickRandomFighers

```tsx
const pickRandomFighters = $(() => {
    state.text = ''
    state.winner = ''

    const fighters = [...allFighters]
    const index1 = Math.floor(Math.random() * fighters.length)
    const [fighter1] = fighters.splice(index1, 1)
    const index2 = Math.floor(Math.random() * fighters.length)
    const fighter2 = fighters[index2]

    state.opponent1 = fighter1
    state.opponent2 = fighter2
  })
```

When I first saw all this, I kinda when cross-eyed, but then I remembered that it is just JavaScript.  That is the beauty of these modern frameworks.  They all have there individual quirks, but at the end of the day, they all use JS.  pickRandomFighters is a perfect example of copy/paste greatness.

In Svelte land, I converted the onPost handler to a form action in +page.server.ts

### ai-image/index.js

This is the file in which Austin created an API to generate the AI image of the two opponents.  The API receives three query params, both opponents, and the winner.  Once again, this was an easy conversion.  Mostly copy/paste with a few quirks.

## Conclusion

While I have not yet finished this project, I intend to, and I have learn a lot about Qwik and the OpenAI API.  Plus, as a bonus, I learned some new things about Svelte.  Definitely worth the time and energy in my book! 🔥

I love tutorials! I am a self taught dev, so video tutorials taught me how to code.  I have to say though, if you want to step up your game even further, I highly recommend converting an exiting project of your own or others.

Thank You For Reading!
