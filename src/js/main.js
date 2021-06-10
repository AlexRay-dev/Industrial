"use strict"

/* Прокрутка при клике */

const menuLinks = document.querySelectorAll(".intro__menu-link[data-goto]");

if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener('click', onMenuLinkClick);
   });

   function onMenuLinkClick (e) {
      const menuLink = e.target;
      if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
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




/* Intro-slider */
new Swiper('.intro__items', {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   keyboard: {
      enabled: true,
      onlyInViewport: true,
   },
   slidesPerView: 4,
   allowTouchMove: false,

   breakpoints: {
      // when window width is >= 320px
      // 320: {
      //   slidesPerView: 2,
      //   spaceBetween: 20
      // },
      // // when window width is >= 480px
      480: {
        slidesPerView: 2.3,
        allowTouchMove: true,
        centeredSlidesBounds: true,

      },
      // when window width is >= 640px
      1400: {
        slidesPerView: 4,
        centeredSlides: false,
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
new Swiper('.partners-slider__container', {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   keyboard: {
      enabled: true,
      onlyInViewport: true,
   },
   centeredSlides: true,
   slidesPerView: 2.5,
   spaceBetween: 10,
   loop: true,
   scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
   },

   breakpoints: {
      320: {
         centeredSlides: false,
         loop: false,
      },
      768: {
         slidesPerView: 4.5,
      },
      991: {
         slidesPerView: 5.5,
      },
      1300: {
         slidesPerView: 7.5,
      }
   }

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



