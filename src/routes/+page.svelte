<script lang="ts">
  import { P, Heading, Card, Badge, A, List, Li } from 'flowbite-svelte';
  import worksjson from '$lib/assets/json/works.json';
  import circlejson from '$lib/assets/json/circle.json';
  import linksjson from '$lib/assets/json/links.json';
  import avater from '$lib/assets/images/avater.png';

  let works = worksjson;
  let circles = circlejson;
  let links = linksjson;
</script>

<div class="flex flex-col sm:flex-row items-center sm:items-start gap-5 mt-10">
  <figure class="w-[30%] sm:w-[20%] min-w-[150px]">
    <img src={avater} alt="WhyKのアバターである鉄風鈴の画像" />
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

<section class="mt-10">
  <Heading tag="h2">主な制作物</Heading>
  <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
    {#each works as work}
      <li>
        <Card
          class="max-w-full"
          img={work.image}
          href={`https://github.com/${work.repository}`}
          target="_blank"
        >
          <P class="text-xl font-bold">{work.title}</P>
          <!-- eslint-disable-next-line svelte/no-at-html-tags -->
          <P class="mt-2">{@html work.description}</P>
          <ul class="flex flex-wrap gap-1 mt-3">
            {#each work.technologies as tech}
              <li><Badge border>{tech}</Badge></li>
            {/each}
          </ul>
        </Card>
      </li>
    {/each}
  </ul>
  <section class="mt-5">
    <Heading tag="h3">サークル内開発</Heading>
    <P class="mt-2"
      >同人サークルのWeb担当として、Web周り全般の企画設計から開発運用を単独で行なっています。<br
      />こちらは原則非公開で開発しています。</P
    >
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
      {#each circles as circle}
        <li>
          <Card class="max-w-full">
            <P class="text-xl font-bold">{circle.title}</P>
            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
            <P class="mt-2">{@html circle.description}</P>
            <ul class="flex flex-wrap gap-1 mt-3">
              {#each circle.technologies as tech}
                <li><Badge border>{tech}</Badge></li>
              {/each}
            </ul>
          </Card>
        </li>
      {/each}
    </ul>
  </section>
</section>

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
