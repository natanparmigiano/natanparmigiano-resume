import resumeMd from '../RESUME.md'

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url)

    if (pathname === '/resume.md') {
      return new Response(resumeMd, {
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          'Cache-Control': 'public, max-age=3600',
        },
      })
    }

    return env.ASSETS.fetch(request)
  },
}
