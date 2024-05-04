<script lang="ts">
import { page } from "$app/stores";
</script>

<h2>There has been an error 😫</h2>

<h3>{$page.status}:</h3>
<p>{$page.error?.message}</p>
