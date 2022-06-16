/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {


document.addEventListener('DOMContentLoaded', function () {
  var menuCover = document.querySelector('.menu-cover');
  var headerBurger = document.querySelector('.header-burger');
  var menuClose = document.querySelector('.menu__close');

  var openMenu = function openMenu() {
    menuCover.classList.toggle('menu-cover-hidden');
  };

  var closeMenu = function closeMenu() {
    menuCover.classList.add('menu-cover-hidden');
  };

  headerBurger.addEventListener('click', openMenu);
  menuClose.addEventListener('click', closeMenu);
  menuCover.addEventListener('click', function (e) {
    var target = e.target;

    if (target.className === 'menu-cover') {
      closeMenu();
    }
  }); // filter

  var filterCategorys = document.querySelectorAll('.filter-category__title');
  var filterWrapHeader = document.querySelector('.filter-wrap__header');
  var filterCategory = document.querySelector('.filter-category');
  var body = document.querySelector('body');

  function tabs(currentElem) {
    filterCategorys.forEach(function (elem) {
      elem.nextElementSibling.classList.remove('filter-category__group--active');
    });
    currentElem.classList.add('filter-category__group--active');
  }

  filterCategorys.forEach(function (element) {
    element.addEventListener('click', function (e) {
      var target = e.target;
      var nextElem = target.nextElementSibling;
      tabs(nextElem);
    });
  });
  body.addEventListener('click', function (e) {
    var target = e.target;

    if (filterCategory) {
      if (target.closest('.filter-wrap__header')) {
        filterCategory.classList.toggle('filter-category--active');
        filterWrapHeader.classList.toggle('filter-wrap__header--active');
      }
    }

    if (filterCategory) {
      if (!target.closest('.filter-wrap') || target.closest('.filter-category__link')) {
        filterCategory.classList.remove('filter-category--active');
        filterWrapHeader.classList.remove('filter-wrap__header--active');
      }
    }
  });
});
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
 // swiper-product

document.addEventListener('DOMContentLoaded', function () {
  if (typeof Swiper === 'function') {
    var productSlider = new Swiper('.product-slider', {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination'
      },
      // Navigation arrows
      navigation: {
        nextEl: '.product-slider-next',
        prevEl: '.product-slider-prev'
      },
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar'
      }
    });
  }
}); // End swiper-product
})();

/******/ })()
;