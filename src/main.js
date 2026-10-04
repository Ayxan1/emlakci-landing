import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { siteConfig } from './config.js'

document.title = siteConfig.site.title

const metaDescription = document.querySelector('meta[name="description"]')
if (metaDescription) {
  metaDescription.setAttribute('content', siteConfig.site.description)
}

createApp(App).mount('#app')
