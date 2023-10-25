if (window.innerWidth > 768) {
  new Swiper('.about__slider', {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 20,
    loop: false,
    navigation: {
      prevEl: '.slider__btn-prev',
      nextEl: '.slider__btn-next',
    },
  });
} else if (window.innerWidth <= 768 && window.innerWidth > 425) {
  new Swiper('.about__slider', {
    slidesPerView: 2,
    slidesPerGroup: 1,
    loop: false,
    navigation: {
      prevEl: '.slider__btn-prev',
      nextEl: '.slider__btn-next',
    },
  });
} else {
  new Swiper('.about__slider', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: false,
    navigation: {
      prevEl: '.slider__btn-prev',
      nextEl: '.slider__btn-next',
    },
  });
}

if (window.innerWidth > 768) {
  new Swiper('.calls__slider', {
    slidesPerView: 3,
    slidesPerGroup: 1,
    loop: false,
    navigation: {
      prevEl: '.slider__btn-prev',
      nextEl: '.slider__btn-next',
    },
  });
} else if (window.innerWidth <= 768 && window.innerWidth > 425) {
  new Swiper('.calls__slider', {
    slidesPerView: 2,
    slidesPerGroup: 1,
    loop: false,
    navigation: {
      prevEl: '.slider__btn-prev',
      nextEl: '.slider__btn-next',
    },
  });
} else {
  new Swiper('.calls__slider', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: false,
    navigation: {
      prevEl: '.slider__btn-prev',
      nextEl: '.slider__btn-next',
    },
  });
}
