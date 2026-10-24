;(() => {
  document.documentElement.classList.add('js')
  const $ = (id) => document.getElementById(id)
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const store = {
    get(k) {
      try { return localStorage.getItem(k) } catch { return null }
    },
    set(k, v) {
      try { localStorage.setItem(k, v) } catch {}
    },
  }

  /* ——— scenes ——— */
  const scenes = window.SCENES
  let current = null
  let timers = []
  // GA4 'share' (analytics.yaml): until the banner's yes, GA gets it cookieless.
  const track = (method) => (window.dataLayer = window.dataLayer || []).push({ event: 'share', method, item_id: current?.id })
  const clearTimers = () => { timers.forEach(clearTimeout); timers = [] }
  const later = (fn, ms) => timers.push(setTimeout(fn, ms))

  function pickScene() {
    const asked = new URLSearchParams(location.search).get('s')
    const byId = scenes.find((s) => s.id === asked)
    if (byId && !current) return byId
    const last = current?.id ?? store.get('am:last')
    const pool = scenes.filter((s) => s.id !== last)
    return pool[Math.floor(Math.random() * pool.length)]
  }

  function el(tag, cls, text, lang) {
    const n = document.createElement(tag)
    if (cls) n.className = cls
    if (text) n.textContent = text
    if (lang) n.lang = lang
    return n
  }

  function render(scene) {
    const index = scenes.indexOf(scene)
    $('scene-reel').textContent = `REEL ${index + 1}`
    $('scene-title-kn').textContent = scene.title.kn
    $('scene-title-en').textContent = scene.title.en
    $('scene-slug').textContent = scene.slug
    const cast = $('scene-cast')
    cast.replaceChildren(...scene.cast.map((c) => el('li', null, c)))
    $('scene-action').textContent = scene.action
    const lines = $('scene-lines')
    lines.replaceChildren(
      ...scene.lines.map((l) => {
        const p = el('p', 'line')
        p.dataset.reveal = ''
        p.append(el('span', 'line__who', l.who))
        if (l.kn) p.append(el('span', 'line__kn', l.kn, 'kn'))
        if (l.tr) p.append(el('span', 'line__tr', l.tr))
        if (l.en) p.append(el('span', 'line__en', l.en))
        return p
      }),
    )
    $('scene-sfx').textContent = scene.sfx
    $('chorus').textContent = scene.chorus
    ;['scene-slug', 'scene-cast', 'scene-action', 'scene-sfx'].forEach((id) => {
      $(id).dataset.reveal = ''
      $(id).classList.remove('is-in')
    })

    const url = `${location.origin}/?s=${scene.id}`
    const text = `🎬 ${scene.title.en} (${scene.title.kn}) — ${scene.chorus}\nಅಡ್ಜಸ್ಟ್ ಮಾಡಿ! ADJUST MAADI!\n${url}`
    $('share-wa').href = `https://wa.me/?text=${encodeURIComponent(text)}`
    $('copy-link').dataset.url = url
    $('copy-link').textContent = 'Copy link'
    history.replaceState(null, '', `?s=${scene.id}`)
    document.title = `${scene.title.en} — Adjust Maadi`

    const seen = new Set((store.get('am:seen') || '').split(',').filter(Boolean))
    seen.add(scene.id)
    store.set('am:seen', [...seen].join(','))
    store.set('am:last', scene.id)
    $('reel-count').textContent =
      seen.size >= scenes.length
        ? `You have seen all ${scenes.length} reels. Same as the traffic: it loops. Adjust maadi.`
        : `Reel ${index + 1} of ${scenes.length} · you have seen ${seen.size}. Keep adjusting.`
  }

  function finish() {
    clearTimers()
    document.querySelectorAll('.scene [data-reveal]').forEach((n) => n.classList.add('is-in'))
    const slam = $('slam')
    if (!slam.classList.contains('is-on')) {
      slam.classList.add('is-on')
      if (!reduced) {
        const reel = document.querySelector('.reel')
        reel.classList.remove('is-shaking')
        void reel.offsetWidth
        reel.classList.add('is-shaking')
      }
    }
    $('chorus').classList.add('is-in')
  }

  function play(scene) {
    clearTimers()
    current = scene
    $('slam').classList.remove('is-on')
    $('chorus').classList.remove('is-in')
    render(scene)
    if (reduced) return finish()

    const steps = [...document.querySelectorAll('.scene [data-reveal]')]
    const count = $('countdown')
    const n = $('countdown-n')
    const leader = ['3', '2', '1']
    count.classList.add('is-on')
    leader.forEach((d, i) => later(() => { n.textContent = d }, i * 280))
    const start = leader.length * 280
    later(() => count.classList.remove('is-on'), start)
    steps.forEach((s, i) => later(() => s.classList.add('is-in'), start + 120 + i * 520))
    later(finish, start + 120 + steps.length * 520 + 250)
  }

  $('next-scene').addEventListener('click', () => {
    play(pickScene())
    document.querySelector('.reel').scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
  })
  document.querySelector('.reel').addEventListener('click', (e) => {
    if (e.target.closest('.actions')) return
    if (timers.length) finish()
  })
  $('copy-link').addEventListener('click', async (e) => {
    const btn = e.currentTarget
    track('copy_link')
    try {
      await navigator.clipboard.writeText(btn.dataset.url)
      btn.textContent = 'Copied, guru!'
    } catch {
      btn.textContent = btn.dataset.url
    }
  })

  $('share-wa').addEventListener('click', () => track('whatsapp'))

  play(pickScene())

  /* ——— Adjust Maadi Radio ——— */
  const songs = window.PLAYLIST
  let lang = 'all'
  let shuffle = true
  let order = []
  let pos = -1
  let player = null
  let apiReady = null

  const visible = () => songs.filter((s) => lang === 'all' || s.language === lang)
  function reorder(keepId) {
    order = visible().map((s) => s.id)
    if (shuffle) {
      for (let i = order.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[order[i], order[j]] = [order[j], order[i]]
      }
    }
    pos = keepId ? order.indexOf(keepId) : -1
  }

  const list = $('tracklist')
  list.replaceChildren(
    ...songs.map((s) => {
      const li = el('li')
      li.dataset.id = s.id
      li.dataset.lang = s.language
      const b = el('button')
      b.type = 'button'
      b.append(el('b', null, s.title), el('small', null, `${s.film} · ${s.language}`))
      b.addEventListener('click', () => {
        if (!order.includes(s.id)) reorder()
        pos = order.indexOf(s.id)
        start()
      })
      li.append(b)
      return li
    }),
  )

  function loadApi() {
    if (apiReady) return apiReady
    apiReady = new Promise((resolve) => {
      window.onYouTubeIframeAPIReady = resolve
      const s = document.createElement('script')
      s.src = 'https://www.youtube.com/iframe_api'
      document.head.append(s)
    })
    return apiReady
  }

  function showNow(song) {
    $('now-title').textContent = song.title
    $('now-film').textContent = `${song.film} · ${song.language}`
    $('now-vibe').textContent = song.vibe
    $('onair').classList.add('is-on')
    $('radio-idle').classList.add('is-hidden')
    list.querySelectorAll('li').forEach((li) => li.classList.toggle('is-playing', li.dataset.id === song.id))
  }

  async function start() {
    if (pos < 0 || pos >= order.length) pos = 0
    const song = songs.find((s) => s.id === order[pos])
    showNow(song)
    await loadApi()
    if (!player) {
      player = new YT.Player('yt-player', {
        host: 'https://www.youtube-nocookie.com',
        videoId: song.id,
        playerVars: { autoplay: 1, playsinline: 1, rel: 0, modestbranding: 1 },
        events: {
          onStateChange: (e) => {
            if (e.data === YT.PlayerState.ENDED) next()
            if (e.data === YT.PlayerState.PLAYING) setPlayLabel(true)
            if (e.data === YT.PlayerState.PAUSED) setPlayLabel(false)
          },
          onError: () => next(),
        },
      })
    } else {
      player.loadVideoById(song.id)
    }
  }

  function next() {
    if (!order.length) reorder()
    pos = (pos + 1) % order.length
    start()
  }

  function setPlayLabel(playing) {
    const b = $('radio-play')
    b.innerHTML = playing ? '⏸ <span>Pause</span>' : '▶ <span>Play</span>'
    b.setAttribute('aria-label', playing ? 'Pause' : 'Play')
    $('onair').classList.toggle('is-on', playing)
  }

  $('radio-play').addEventListener('click', () => {
    if (player && player.getPlayerState) {
      const st = player.getPlayerState()
      if (st === YT.PlayerState.PLAYING) return player.pauseVideo()
      if (st === YT.PlayerState.PAUSED || st === YT.PlayerState.CUED) return player.playVideo()
    }
    if (!order.length) reorder()
    if (pos < 0) pos = 0
    start()
  })
  $('radio-next').addEventListener('click', next)
  $('radio-shuffle').addEventListener('click', (e) => {
    shuffle = !shuffle
    e.currentTarget.setAttribute('aria-pressed', String(shuffle))
    reorder(order[pos])
  })
  document.querySelectorAll('.chip').forEach((chip) =>
    chip.addEventListener('click', () => {
      lang = chip.dataset.lang
      document.querySelectorAll('.chip').forEach((c) => c.classList.toggle('is-on', c === chip))
      list.querySelectorAll('li').forEach((li) => { li.hidden = lang !== 'all' && li.dataset.lang !== lang })
      reorder()
    }),
  )
  reorder()
})()
