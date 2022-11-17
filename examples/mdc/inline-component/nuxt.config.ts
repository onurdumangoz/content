import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/ui'
  ],
  content: {
    highlight: {
      theme: 'one-dark-pro'
    }
  }
})
