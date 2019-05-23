// app/javascript/components/banner.js
import Typed from 'typed.js';

const typedElement = document.getElementById('banner-typed-text');


const loadDynamicBannerText = () => {
  if (typedElement) {
    new Typed('#banner-typed-text', {
      strings: ["Find all your weekend adventure equipment!"],
      typeSpeed: 100,
      loop: true,
    });
  }
}

export { loadDynamicBannerText };
