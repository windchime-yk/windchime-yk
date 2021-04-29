/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
import { NuxtConfig } from '@nuxt/types'
import Sass from 'sass'
import Fiber from 'fibers'

const config: NuxtConfig = {
  mode: 'universal',
  target: 'static',
  head: {
    title: '<whyk-dev/> - WhyK Portfolio Site',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'WhyKのポートフォリオサイトです',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: '<whyk-dev/> - WhyK Portfolio Site',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://whyk.dev' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '&lt;whyk-dev/&gt; - WhyK Portfolio Site',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'WhyKのポートフォリオサイトです',
      },
      { hid: 'og:image', property: 'og:image', content: '/ogp-image.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@windchime-yk' },
      { name: 'twitter:image', content: '/ogp-image.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/site-icon.svg' },
    ],
  },
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/composition-api',
  ],
  modules: ['@nuxtjs/axios', '@nuxtjs/style-resources', 'nuxt-fontawesome'],
  styleResources: {
    scss: ['@/assets/scss/_variable.scss', '@/assets/scss/_mixins.scss'],
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab'],
      },
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas'],
      },
    ],
  },
  googleFonts: {
    families: {
      'Fira+Code': {
        wght: [700],
      },
    },
    display: 'swap',
    download: true,
    inject: true,
  },
  build: {
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber,
        },
      },
    },
  },
}

export default config
