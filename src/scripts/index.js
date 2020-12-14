import '../babel'
import '../sass/style.sass'
import WOW from 'wowjs'
// Картинки
import Sprite from '../img/sprite.svg'
import Search from '../img/header/search.svg'
import MainBg from '../img/main/bg.jpg'
import MainAvatar from '../img/main/mainAvatar.png'
import Ch1 from '../img/chips/ch1.jpg'
import Ch2 from '../img/chips/ch2.jpg'
import Ch3 from '../img/chips/ch3.jpg'
import Ch4 from '../img/chips/ch4.jpg'
// Шрифты
import Lato1 from '../fonts/Lato-Thin.woff'
import Lato2 from '../fonts/Lato-Light.woff'
import Lato3 from '../fonts/Lato-Regular.woff'
import Lato4 from '../fonts/Lato-Medium.woff'
import Lato5 from '../fonts/Lato-Bold.woff'
import Lato6 from '../fonts/Lato-Heavy.woff'
import Lato7 from '../fonts/Lato-Black.woff'
import Lato8 from '../fonts/Lato-Semibold.woff'

const mobileBtn = document.querySelector('.mobile-button'),
      mobileMenu = document.querySelector('.navigation--mobile'),
      tiles = document.querySelectorAll('.main-information__sidebar-tile'),
      mainContent = document.querySelectorAll('.main-information__info'),
      sidebarBtn = document.querySelector('.main-information__sm-btn'),
      mainSidebar = document.querySelector('.main-information__sidebar'),
      sideClose = document.querySelector('.main-information__mobile-icon'),
      mobileBtnLine = document.querySelectorAll('.mobile-button__line');
mobileBtn.addEventListener('click', function(){
  this.classList.toggle('mobile-button--active');
  for(let i=0; i<mobileBtnLine.length; i++){
    mobileBtnLine[i].classList.toggle('mobile-button__line--active');
  }
  if(mobileBtn.classList.contains('mobile-button--active')){
    mobileMenu.style.top="64px";
  } else {
    mobileMenu.style.top="-1200px";
  }
});

function toggleSide(){
  mainSidebar.classList.toggle('main-information__sidebar--active');
}

function tabSelected(event){
    tiles.forEach(function(el){
      el.classList.remove('main-information__sidebar-tile--active');
    });
    let t = event.target;
    t.closest('.main-information__sidebar-tile').classList.add('main-information__sidebar-tile--active');
    for (let i=0; i<6; i++) {
      if (tiles[0].classList.contains('main-information__sidebar-tile--active')) {
        mainContent[i].classList.remove('main-information__info--active');
        mainContent[1].classList.add('main-information__info--active');
      }
      else if (tiles[1].classList.contains('main-information__sidebar-tile--active')) {
        mainContent[i].classList.remove('main-information__info--active');
        mainContent[2].classList.add('main-information__info--active');
      }
      else if (tiles[2].classList.contains('main-information__sidebar-tile--active')) {
        mainContent[i].classList.remove('main-information__info--active');
        mainContent[3].classList.add('main-information__info--active');
      }
      else if (tiles[3].classList.contains('main-information__sidebar-tile--active')) {
        mainContent[i].classList.remove('main-information__info--active');
        mainContent[4].classList.add('main-information__info--active');
      }
      else {
        mainContent[i].classList.remove('main-information__info--active');
        mainContent[5].classList.add('main-information__info--active');
      }
    }
};

sidebarBtn.addEventListener('click', toggleSide);
sideClose.addEventListener('click', toggleSide);

for (let i=0; i<tiles.length; i++) {
  tiles[i].addEventListener('click', tabSelected);
}

var wow = new WOW.WOW({
  live: false
}).init();