import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router.js'
import './style.css'

export const createApp = ViteSSG(App, { routes }, ({ router, isClient }) => {
  if (!isClient) return

  const preferred = localStorage.getItem('cv-language')
  const path = router.currentRoute.value.path

  if (preferred === 'pt' && path === '/') {
    router.replace('/pt')
  }
})
