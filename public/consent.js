/* The cookie banner. Google Analytics starts with consent denied (the <head> of each page), so it
   sets no cookie until someone says yes here. The choice is kept in this browser; "Cookie settings"
   in the footer forgets it and asks again. A port of marain.space's components/consent.tsx. */
;(() => {
  const KEY = 'analytics-consent'

  function read() {
    try {
      const v = localStorage.getItem(KEY)
      return v === 'granted' || v === 'denied' ? v : null
    } catch {
      return 'denied' // storage blocked: nothing to remember, so do not ask on every page
    }
  }

  function choose(choice) {
    try {
      if (choice) localStorage.setItem(KEY, choice)
      else localStorage.removeItem(KEY)
    } catch {}
    if (choice) window.gtag?.('consent', 'update', { analytics_storage: choice })
    // A "no" after an earlier "yes" also removes the cookies that yes set.
    if (choice === 'denied') {
      for (const c of document.cookie.split(';')) {
        const name = c.split('=')[0].trim()
        if (!name.startsWith('_ga')) continue
        document.cookie = `${name}=; Max-Age=0; path=/; domain=.${location.hostname.replace(/^www\./, '')}`
        document.cookie = `${name}=; Max-Age=0; path=/`
      }
    }
    render()
  }

  let banner = null
  function render() {
    if (read() !== null) {
      banner?.remove()
      banner = null
      return
    }
    if (banner) return
    banner = document.createElement('div')
    banner.className = 'cb'
    banner.setAttribute('role', 'dialog')
    banner.setAttribute('aria-label', 'Cookies')
    banner.innerHTML =
      '<p>We count visits with Google Analytics. It sets a cookie only if you say yes.</p>' +
      '<div class="cb__row">' +
      '<button type="button" class="btn btn--primary" data-choice="granted">Yes, count me</button>' +
      '<button type="button" class="btn btn--ghost" data-choice="denied">No thanks</button>' +
      '</div>'
    banner.addEventListener('click', (e) => {
      const b = e.target.closest('[data-choice]')
      if (b) choose(b.dataset.choice)
    })
    document.body.append(banner)
  }

  document.querySelectorAll('[data-consent-reopen]').forEach((b) => b.addEventListener('click', () => choose(null)))
  render()
})()
