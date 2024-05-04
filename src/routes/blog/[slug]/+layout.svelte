<script lang="ts">
import { onNavigate } from "$app/navigation";
import Comments, { Count } from "disqus-svelte";

import "iconify-icon";

onNavigate((navigation) => {
  if (!document.startViewTransition) return;

  return new Promise((resolve) => {
    document.startViewTransition(async () => {
      resolve();
      await navigation.complete;
    });
  });
});
</script>

<slot />

<Count shortname="tim-smith" />
