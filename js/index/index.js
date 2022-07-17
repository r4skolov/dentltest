const heroslideSpeed = 1500;
const bodyStyles = window.getComputedStyle(document.body);
const fooBar = bodyStyles.getPropertyValue('--hero-slide-speed');
document.body.style.setProperty('--hero-slider-speed' , heroslideSpeed + 'ms')

const swiperHero = new Swiper('.hero__swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 300,
    loop: true,
    autoplay: {
      delay: 8000,
    },
    speed: heroslideSpeed,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
      pagination: {
        el: '.hero__pug',
        type: 'bullets',
      },
      on: {
        init: function() {
          const paginationBullets = document.querySelectorAll('.swiper-pagination-bullet');

          paginationBullets.forEach(el => {
            el.innerHTML = `<span class="hero__bar"></span>`
          });
        }
      },
});

const swiperSpecial = new Swiper('.special__swiper', {
  slidesPerView: 2,
  speed: 300,
  loop: true,
  navigation: {
    nextEl: '.special__next',
    prevEl: '.special__prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    1280: {
      slidesPerView: 4,
    }
  }
 
});

const swiperBrands = new Swiper('.brands-swiper', {
  slidesPerView: 3.1,
  spaceBetween: 17,
  speed: 300,
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 3.5,
      spaceBetween: 17,
    },
    480: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 4.7,
      spaceBetween: 29,
    },
    1280: {
      slidesPerView: 6,
      spaceBetween: 36,
    }
  }
});