import tabs from './modules/tabs';
import calc from './modules/calc';
import forms from './modules/forms';
import timer from './modules/timer';
import modal from './modules/modal';
import cards from './modules/cards';
import slider from './modules/slider';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', function() {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);


    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    calc();
    forms('.form', modalTimerId);
    timer('.timer', '2022-10-10');
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide : '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
    });
    modal('[data-modal]', '.modal', modalTimerId);
    cards();

});