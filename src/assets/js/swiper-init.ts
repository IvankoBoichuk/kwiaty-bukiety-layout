/**
 * Swiper Initialization
 * Initialize all Swiper sliders on the page
 */

import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

function initEventsSwipers(): void {
    const swipers = document.querySelectorAll<HTMLElement>('.events-swiper')

    swipers.forEach((swiperEl) => {
        new Swiper(swiperEl, {
            modules: [Pagination],
            slidesPerView: 'auto',
            spaceBetween: 12,
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
                    spaceBetween: 24,
                },
            },
            pagination: {
                el: swiperEl.querySelector('.swiper-pagination') as HTMLElement,
                clickable: true,
            },
        })
    })
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEventsSwipers)
} else {
    initEventsSwipers()
}
