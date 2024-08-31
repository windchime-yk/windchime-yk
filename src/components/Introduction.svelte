<script lang="ts">
  import { P, Heading } from 'flowbite-svelte';
</script>

<div class="flex flex-col sm:flex-row items-center sm:items-start gap-5 mt-10">
  <figure class="w-[30%] sm:w-[20%] min-w-[150px]">
    <img src="/images/avater.png" alt="WhyKのアバターである鉄風鈴の画像" />
  </figure>
  <section>
    <Heading tag="h2">WhyK</Heading>
    <P class="mt-5"
      >フロントエンドエンジニア。JavaScriptのバックエンドも好き。<br
      />Denoをv1のリリース日から遊んでる。</P
    >
    <P class="mt-2"
      >TypeScriptとお茶が好き。<br />玄米茶がたぶん一番好き。最近は凍頂烏龍茶を飲んだりしてる。</P
    >
  </section>
</div>
