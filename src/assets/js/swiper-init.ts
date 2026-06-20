/**
 * Swiper Initialization
 * Initialize all Swiper sliders on the page
 */

import Swiper from 'swiper'
import { Pagination, Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

function initEventsSwipers(): void {
    const swipers = document.querySelectorAll<HTMLElement>('.events-swiper')

    swipers.forEach((swiperEl) => {
        new Swiper(swiperEl, {
            modules: [Pagination, Navigation],
            spaceBetween: 12,
            slidesPerView: 1.3,
            slidesPerGroup: 1,
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 24,
                },
                1024: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 12,
                },
                1280: {
                    slidesPerView: 4.3,
                    slidesPerGroup: 3,
                    spaceBetween: 12,
                },
            },
            pagination: {
                el: swiperEl.querySelector('.swiper-pagination') as HTMLElement,
                clickable: true,
            },
            navigation: {
                prevEl: swiperEl.querySelector('.events-swiper-prev') as HTMLElement,
                nextEl: swiperEl.querySelector('.events-swiper-next') as HTMLElement,
            },
        })
    })
}

function initProductGallery(): void {
    const swipers = document.querySelectorAll<HTMLElement>('.product-gallery-swiper')

    swipers.forEach((swiperEl) => {
        // Optional thumbnails (desktop) — find the thumbs container within the gallery root
        const galleryRoot = swiperEl.closest('.product-gallery')
        const thumbsEl = galleryRoot?.querySelector<HTMLElement>('.product-gallery-thumbs')

        const thumbs = thumbsEl
            ? new Swiper(thumbsEl, {
                  spaceBetween: 12,
                  slidesPerView: 'auto',
                  watchSlidesProgress: true,
              })
            : undefined

        new Swiper(swiperEl, {
            modules: [Navigation, Thumbs],
            spaceBetween: 16,
            slidesPerView: 1,
            navigation: {
                nextEl: '.product-gallery-next',
                prevEl: '.product-gallery-prev',
            },
            thumbs: thumbs ? { swiper: thumbs } : undefined,
        })
    })
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initEventsSwipers()
        initProductGallery()
    })
} else {
    initEventsSwipers()
    initProductGallery()
}
