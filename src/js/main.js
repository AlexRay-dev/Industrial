"use strict"





/* Прокрутка при клике */

const menuLinks = document.querySelectorAll(".intro__menu-link[data-goto]");

if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener('click', onMenuLinkClick);
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top;

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      };
   };
};



/* Burger */
const menuBtn = document.querySelector('.burger');
const menuMobile = document.querySelector('.menu__body');
let menuOpen = false;

menuBtn.addEventListener('click', function () {
   if (!menuOpen) {
      menuBtn.classList.add('burger--open');
      menuMobile.classList.add('menu__body--open');
      menuOpen = true;
   } else {
      menuBtn.classList.remove('burger--open');
      menuMobile.classList.remove('menu__body--open');
      menuOpen = false;
   }
})
/* Burger */




/* intro__slider */
new Swiper('.intro__slider', {
   navigation: {
      nextEl: '.intro__slider-btn--next',
      prevEl: '.intro__slider-btn--prev',
   },
   keyboard: {
      enabled: true,
      onlyInViewport: true,
   },
   allowTouchMove: false,
   spaceBetween: 10,

   breakpoints: {
      480: {
         slidesPerView: 1,
         allowTouchMove: true,
      },
      1024: {
         slidesPerView: 4,
         loop: false,
      }
   }
});

new Swiper('.slider-fluid__container', {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   keyboard: {
      enabled: true,
      onlyInViewport: true,
   },
   autoHeight: true,
});


let partnersSlider = new Swiper('.partners-slider__container', {
   navigation: {
      nextEl: '.partners-slider__btn-next',
      prevEl: '.partners-slider__btn-prev',
   },
   keyboard: {
      enabled: true,
      onlyInViewport: true,
   },
   spaceBetween: 10,
   // centeredSlides: true,
   loop: true,
   scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      dragSize: 30,
   },

   breakpoints: {
      320: {
         loop: false,
         centeredSlides: false,
         slidesPerView: 1.5,
      },
      520: {
         loop: false,
         centeredSlides: false,
         slidesPerView: 2.5,
      },
      768: {
         loop: false,
         centeredSlides: false,
         slidesPerView: 4.5,
         scrollbar: {
            dragSize: 60,
         },
      },
      1025: {
         slidesPerView: 5.5,
         loop: true,
         centeredSlides: true,
      },
      1300: {
         slidesPerView: 7.5,
         centeredSlides: true,
      }
   }
});

new Swiper('.slider-fluid__container', {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   keyboard: {
      enabled: true,
      onlyInViewport: true,
   },
   autoHeight: true,
});


let servicesSlider = new Swiper('.services-slider__container', {
   navigation: {
      nextEl: '.services-slider__btn-next',
      prevEl: '.services-slider__btn-prev',
   },
   keyboard: {
      enabled: true,
      onlyInViewport: true,
   },
   slidesPerView: 1.5,
   centeredSlides: true,
   spaceBetween: 10,
   loop: true,

   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 1.5,
      },
   }
});
let articleSlider = new Swiper('.article__slider', {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   keyboard: {
      enabled: true,
      onlyInViewport: true,
   },
   slidesPerView: 1,
   loop: true,
});




/* Example-tabs */
const tabsExampleBtn = document.querySelectorAll(".map__item");
const tabsExampleItem = document.querySelectorAll(".map__tabs-item");

tabsExampleBtn.forEach(onTabBtnClick)

function onTabBtnClick(item) {
   item.addEventListener('mouseover', function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId)


      currentBtn.classList.add("map__item--active");
      currentTab.classList.add("map__tabs-item--active")
   });
   item.addEventListener('mouseout', function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId)


      currentBtn.classList.remove("map__item--active");
      currentTab.classList.remove("map__tabs-item--active")
   });
};
/* Example-tabs */


var image = document.getElementsByClassName('objects__img');
new simpleParallax(image, {
	scale: 1.3,
   delay: .3,
	transition: 'cubic-bezier(0,0,0,1)'
});



const time = 2500;
const step = 1;

function outNum110(num, elem) {
  let e = document.querySelector("#numbers_110");
  let n = 0;
  let t = Math.round(time / (num / step));
  let interval = setInterval(() => {
    n = n + step;
    if (n == num) {
      clearInterval(interval);
    }
    e.innerHTML = n;
  }, t);
}
function outNum25(num, elem) {
  let e = document.querySelector("#numbers_25");
  let n = 0;
  let t = Math.round(time / (num / step));
  let interval = setInterval(() => {
    n = n + step;
    if (n == num) {
      clearInterval(interval);
    }
    e.innerHTML = n;
  }, t);
}

outNum110(110, "#numbers_110");
outNum25(25, "#numbers_25");



