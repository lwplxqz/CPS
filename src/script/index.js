
import Swiper, { Navigation, Pagination } from 'swiper';
import '../styles/style.scss';


let menuContaier = document.querySelector('.menu-container');
let openMenuButton = document.querySelector('.header__menu-button');
let closeMenuButton = document.querySelector('.nav-header__button-close');
let openFeedbackButton = document.querySelector('.nav-footer__chat');
let openFeedbackButtonH = document.querySelector('.header__chat-button');
let openCallButton = document.querySelector('.nav-footer__phone');
let openCallButtonH = document.querySelector('.header__phone-button');
let callModal = document.querySelector('.modal-call');
let feedbackModal = document.querySelector('.modal-feedback');
let closeFeedbackModal = document.querySelector('.modal-button');
let closeCallModal = document.querySelector('.modal-call-button');
let whiteXD = document.querySelector('.whiteXD');


const show_button = document.querySelector('.slider__show-more-button');
const hide_button = document.querySelector('.slider__hide-more-button');
const wrapper = document.querySelector('.slider__swiper-wrapper');

closeMenuButton.addEventListener('click', function(){
    menuContaier.classList.add('menu-container--hidden');
    whiteXD.classList.add('whiteXD--hidden');
})
openMenuButton.addEventListener('click', function(){
    menuContaier.classList.remove('menu-container--hidden');
    whiteXD.classList.remove('whiteXD--hidden');
})
openFeedbackButton.addEventListener('click', function(){
    feedbackModal.classList.remove('modal-feedback--hidden');
    whiteXD.classList.remove('whiteXD--hidden');
})
openCallButton.addEventListener('click', function(){
    callModal.classList.remove('modal-call--hidden');
    whiteXD.classList.remove('whiteXD--hidden');
})
openFeedbackButtonH.addEventListener('click', function(){
    feedbackModal.classList.remove('modal-feedback--hidden');
    whiteXD.classList.remove('whiteXD--hidden');
})
openCallButtonH.addEventListener('click', function(){
    callModal.classList.remove('modal-call--hidden');
    whiteXD.classList.remove('whiteXD--hidden');
})


closeCallModal.addEventListener('click', function(){
    callModal.classList.add('modal-call--hidden');
    whiteXD.classList.add('whiteXD--hidden');
})
closeFeedbackModal.addEventListener('click', function(){
    feedbackModal.classList.add('modal-feedback--hidden');
    whiteXD.classList.add('whiteXD--hidden');
})
show_button.addEventListener('click', function(){
    wrapper.classList.add('slider__swiper-wrapper_unfolded');
    show_button.classList.add('hidden');
    hide_button.classList.remove('hidden');
})
hide_button.addEventListener('click', function(){
    wrapper.classList.remove('slider__swiper-wrapper_unfolded');
    hide_button.classList.add('hidden');
    show_button.classList.remove('hidden');
})

const swiper = new Swiper('.swiper-container', {
    modules: [Navigation, Pagination],
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoHeight: true,
    spaceBetween: 15,
    slidesPerView: 'auto',
    centeredSlides: false,
    breakpoints: {
        768: {
            enabled: false,
            onAny() {
                swiper.destroy(true, true);
            }
        }
    },
    observer: true,
})