import tabs from './modules/tabs';
import modal from './modules/modal';
import forms from './modules/forms';
import cards from './modules/cards';
import timer from './modules/timer';
import calc from './modules/calc';
import slider from './modules/slider';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

  const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

  tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
  modal('[data-modal]', '.modal', '.modal');
  forms('form', modalTimerId);
  cards();
  timer('.timer', '2023-12-15');
  calc();
  slider({
    container: '.offer__slider',
    slide: '.offer__slide',
    prevArrow: '.offer__slider-prev',
    nextArrow: '.offer__slider-next',
    totalCounter: '#total',
    currentCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner'
  });

});

