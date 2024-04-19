// https://swiperjs.com/get-started#installation
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Парсить из ссылки
const id = '9TZXsZItgdw';

function setupVideo() {
  const video = document.querySelector('.video');
  const link = video.querySelector('.video__link');
  const button = video.querySelector('.video__button');


  button.addEventListener('click', () => {
    const iframe = createIframe(id);

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
}

function createIframe() {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('src', generateURL(id));
  iframe.setAttribute('allow', 'autoplay');
  iframe.classList.add('video__media');

  return iframe;
}

function generateURL() {
  const query = '?rel=0&showinfo=0&autoplay=1';

  return `https://www.youtube.com/embed/${id}${query}`;
}

setupVideo();

// Переключение табов с ценой

const prices = {
  '1 month': { personal: '5000', daytime: '1700', fulltime: '2700' },
  '6 months': { personal: '30000', daytime: '10200', fulltime: '16200' },
  '12 months': { personal: '60000', daytime: '20400', fulltime: '32400' }
};

const priceTabTitles = document.querySelectorAll('.price-tabs__button');
const priceCards = document.querySelectorAll('.price-card');
priceTabTitles.forEach((item) => item.addEventListener('click', (evt) => {
  const currentTabTitle = evt.target.getAttribute('data-price-tab-id');
  priceTabTitles.forEach((element) => element.classList.remove('price-tabs__button--active'));
  item.classList.add('price-tabs__button--active');
  priceCards.forEach((card) => {
    const cardId = card.getAttribute('id');
    const cardPrices = card.querySelectorAll('.price-card__price');
    cardPrices.forEach((price) => {
      price.textContent = prices[`${currentTabTitle}`][`${cardId}`];
    });
  });
}));

// //Swiper
new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});


