<script setup>
import { useHead } from '@unhead/vue'
import { useRoute } from 'vue-router'
import { navSections, resume } from '../data/resume.js'
import { useLanguage } from '../composables/useLanguage'
import AppHeader from '../components/AppHeader.vue'
import HeroSection from '../components/HeroSection.vue'
import SummarySection from '../components/SummarySection.vue'
import CompetenciesSection from '../components/CompetenciesSection.vue'
import ExperienceSection from '../components/ExperienceSection.vue'
import AchievementsSection from '../components/AchievementsSection.vue'
import EducationSection from '../components/EducationSection.vue'
import CertificationsSection from '../components/CertificationsSection.vue'
import LanguagesSection from '../components/LanguagesSection.vue'

const route = useRoute()
const language = route.meta.lang === 'pt' ? 'pt' : 'en'
const content = resume[language]
const { setLanguage } = useLanguage()

const siteUrl = 'https://natan.parmigiano.tech'
const year = new Date().getFullYear()
const pageUrl = language === 'pt' ? `${siteUrl}/pt` : siteUrl
const summaryText = content.summary.paragraphs.join(' ')
const pageDescription =
  summaryText.length > 160 ? `${summaryText.slice(0, 157)}...` : summaryText

useHead({
  htmlAttrs: {
    lang: language === 'pt' ? 'pt-BR' : 'en',
  },
  title: `${content.meta.name} — CV`,
  meta: [
    { name: 'description', content: pageDescription },
    { property: 'og:title', content: `${content.meta.name} — CV` },
    { property: 'og:description', content: pageDescription },
    { property: 'og:type', content: 'profile' },
    { property: 'og:url', content: pageUrl },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: `${content.meta.name} — CV` },
    { name: 'twitter:description', content: pageDescription },
  ],
  link: [
    { rel: 'canonical', href: pageUrl },
    { rel: 'alternate', hreflang: 'en', href: siteUrl },
    { rel: 'alternate', hreflang: 'pt-BR', href: `${siteUrl}/pt` },
    { rel: 'alternate', hreflang: 'x-default', href: siteUrl },
  ],
})
</script>

<template>
  <div class="min-h-screen overflow-hidden">
    <div class="fixed inset-0 -z-10 bg-[var(--bg)]">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--accent-soft),transparent_34%),radial-gradient(circle_at_80%_10%,var(--glow),transparent_28%)]" />
      <div class="absolute inset-0 bg-[linear-gradient(var(--grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--grid-line)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_72%)]" />
    </div>

    <AppHeader
      :meta="content.meta"
      :nav="content.nav"
      :labels="content.labels"
      :language="language"
      :sections="navSections"
      @language-change="setLanguage"
    />

    <main class="mx-auto max-w-5xl px-5 pb-16 sm:px-6">
      <HeroSection :meta="content.meta" :labels="content.labels" :summary="content.summary" />

      <SummarySection :summary="content.summary" />
      <CompetenciesSection :competencies="content.competencies" />
      <ExperienceSection
        :experience="content.experience"
        :primary-stack-label="content.labels.primaryStack"
        :language="language"
      />
      <AchievementsSection :achievements="content.achievements" />
      <EducationSection :education="content.education" />
      <CertificationsSection :certifications="content.certifications" />
      <LanguagesSection :languages="content.languages" />
    </main>

    <footer class="border-t border-[var(--border-subtle)] bg-[var(--bg)]/75 py-6 text-center text-xs text-[var(--text-subtle)] backdrop-blur">
      {{ content.meta.name }} · {{ year }}
    </footer>
  </div>
</template>
