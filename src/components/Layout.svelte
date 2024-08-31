<script lang="ts">
  import {
    Navbar,
    NavBrand,
    DarkMode,
    Footer,
    FooterCopyright,
    FooterLink,
    FooterLinkGroup
  } from 'flowbite-svelte';
</script>

<div class="min-h-screen grid grid-rows-[auto,1fr,auto]">
  <Navbar>
    <NavBrand href="/"><span class="text-2xl font-bold">WhyK</span></NavBrand>
    <DarkMode />
  </Navbar>
  <main class="md:max-w-[1000px] w-full px-5 lg:px-0 md:mx-auto">
    <slot />
  </main>
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
</div>
