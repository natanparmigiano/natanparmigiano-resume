import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { resume } from '../data/resume.js'

const STORAGE_KEY = 'cv-language'

export function useLanguage() {
  const route = useRoute()
  const router = useRouter()

  const language = computed(() => (route.meta.lang === 'pt' ? 'pt' : 'en'))
  const content = computed(() => resume[language.value])

  function setLanguage(lang) {
    if (lang !== 'en' && lang !== 'pt') return

    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, lang)
    }

    router.push(lang === 'pt' ? '/pt' : '/')
  }

  return { language, content, setLanguage }
}
