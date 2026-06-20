
function setupGallery(gallery: HTMLElement): void {
    const track = gallery.querySelector<HTMLElement>('[data-gallery-track]')
    const dotsEl = gallery.querySelector<HTMLElement>('[data-gallery-dots]')
    if (!track || !dotsEl) return

    const prevBtn = gallery.querySelector<HTMLButtonElement>('[data-gallery-prev]')
    const nextBtn = gallery.querySelector<HTMLButtonElement>('[data-gallery-next]')
    prevBtn?.addEventListener('click', () => {
        track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' })
    })
    nextBtn?.addEventListener('click', () => {
        track.scrollBy({ left: track.clientWidth, behavior: 'smooth' })
    })

    let dots: HTMLButtonElement[] = []

    const pageCount = (): number =>
        Math.max(1, Math.round(track.scrollWidth / track.clientWidth))

    const activeIndex = (): number =>
        Math.round(track.scrollLeft / track.clientWidth)

    const updateButtons = (): void => {
        const atStart = track.scrollLeft <= 1
        const atEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth - 1
        if (prevBtn) prevBtn.disabled = atStart
        if (nextBtn) nextBtn.disabled = atEnd
    }

    const updateActive = (): void => {
        const i = activeIndex()
        dots.forEach((dot, idx) => {
            dot.dataset.active = String(idx === i)
        })
        updateButtons()
    }

    const build = (): void => {
        const count = pageCount()
        if (count === dots.length) {
            updateActive()
            return
        }
        dotsEl.innerHTML = ''
        dots = Array.from({ length: count }, (_, i) => {
            const dot = document.createElement('button')
            dot.type = 'button'
            dot.setAttribute('aria-label', `Przejdź do ${i + 1}`)
            dot.className =
                'h-2 w-2 rounded-full bg-purple-easy/40 transition-all duration-300 data-[active=true]:w-5 data-[active=true]:bg-purple-easy'
            dot.addEventListener('click', () => {
                track.scrollTo({ left: i * track.clientWidth, behavior: 'smooth' })
            })
            dotsEl.appendChild(dot)
            return dot
        })
        updateActive()
    }

    let ticking = false
    track.addEventListener(
        'scroll',
        () => {
            if (ticking) return
            ticking = true
            requestAnimationFrame(() => {
                updateActive()
                ticking = false
            })
        },
        { passive: true },
    )

    window.addEventListener('resize', build)
    build()
}

export function initGalleryDots(): void {
    document.querySelectorAll<HTMLElement>('[data-gallery]').forEach(setupGallery)
}
