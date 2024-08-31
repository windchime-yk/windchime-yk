<script lang="ts">
  import {
    Footer,
    FooterCopyright,
    FooterLink,
    FooterLinkGroup
  } from 'flowbite-svelte';
</script>

<Footer>
  <FooterCopyright by="WhyK" year={new Date().getFullYear()} />
  <FooterLinkGroup
    ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
  >
    <FooterLink href="https://github.com/windchime-yk/portfolio" target="_blank"
      >GitHub</FooterLink
    >
  </FooterLinkGroup>
</Footer>