import setScrollBarWidth from 'set-scrollbar-width';
import './video-player';
import './swiper-init';
import './lightgallery-init';
import './product-order';
import { initMenu } from './menu';
import { initCounterAnimation } from './counter-animation';
import { initGalleryDots } from './gallery-dots';

setScrollBarWidth();
initMenu();
initCounterAnimation();
initGalleryDots();