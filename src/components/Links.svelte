<script lang="ts">
  import { Heading,A, List, Li } from 'flowbite-svelte';
  import linksjson from '../libs/json/links.json';
  let links = linksjson;
</script>

<section class="mt-10">
  <Heading class="" tag="h2">各種リンク</Heading>
  <List tag="ul" class="mt-3">
    {#each links as link}
      <Li class="text-slate-900 dark:text-slate-100"
        ><A href={link.url} target="_blank" underline>{link.name}</A></Li
      >
    {/each}
  </List>
</section>
