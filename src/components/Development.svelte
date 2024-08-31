<script lang="ts">
  import { P, Heading, Card, Badge } from 'flowbite-svelte';
  import worksjson from '../libs/json/works.json';
  import circlejson from '../libs/json/circle.json';

  let works = worksjson;
  let circles = circlejson;
</script>

<section class="mt-10">
  <Heading tag="h2">主な制作物</Heading>
  <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
    {#each works as work}
      <li>
        <Card
          class="max-w-full"
          img={`https://opengraph.githubassets.com/1/${work.repository}`}
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
