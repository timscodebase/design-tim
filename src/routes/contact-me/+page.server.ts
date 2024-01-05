import { SECRET_AIRTABLE_BASE_ID, SECRET_AIRTABLE_TOKEN } from '$env/static/private'
const AIRTABLE_URL = `https://api.airtable.com/v0/${SECRET_AIRTABLE_BASE_ID}/submissions`

import { json, redirect } from '@sveltejs/kit'

export const actions = {
  default: async ({ request }) => {
    // get the form data
    const fd = await request.formData()

    const name = fd.get('name')
    const email = fd.get('email')
    const message = fd.get('message')

    console.log('name:', name)
    console.log('email:', email)
    console.log('message:', message)

    let data = {
      records: [
        {
          fields: {
            name,
            email,
            message,
          },
        },
      ],
    }
    const res = await fetch(AIRTABLE_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${SECRET_AIRTABLE_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (res.ok) {
      return new Response('success', {
        headers: {
          'Content-Type': 'text/plain',
        },
        status: 200,
        body: json(data),
      })
    } else {
      return new Response('error', {
        headers: {
          'Content-Type': 'text/plain',
        },
        status: 500,
      })
    }
  }
}