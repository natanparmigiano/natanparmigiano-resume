import CvPage from './pages/CvPage.vue'

export const routes = [
  {
    path: '/',
    component: CvPage,
    meta: { lang: 'en' },
  },
  {
    path: '/pt',
    component: CvPage,
    meta: { lang: 'pt' },
  },
]
