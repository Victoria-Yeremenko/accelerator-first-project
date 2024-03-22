// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

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
