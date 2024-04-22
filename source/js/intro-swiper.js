import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const swiperIntro = new Swiper('.intro', { //eslint-disable-line
  modules: [ Pagination ],
  loop: true,
  effect: 'fade',
  pagination: {
    el: '.intro__pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return `<button class=" ${className} pagination__button" type="button"></button>`;
    },
  },
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 0,
});
