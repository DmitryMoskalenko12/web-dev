import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const carousel = () => {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 30
      },

      1440: {
        slidesPerView: 4,
        spaceBetween: 32
      },

      1920: {
        slidesPerView: 5.57,
        initialSlide: 3,
        spaceBetween: 32,
        centeredSlides: true,
      }
    }
  });
}

export default carousel;