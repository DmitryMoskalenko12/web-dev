const header = () => {
const infoBlock = document.querySelectorAll('.side-menu__info');
const button = document.querySelectorAll('.side-menu__button');
const burger = document.querySelector('.header__burger');
const sideMenu = document.querySelector('.side-menu');
const close = document.querySelector('.side-menu__close');
const overlay = document.querySelector('.overlay');

close.addEventListener('click', () => {
  sideMenu.classList.remove('side-menu_active');
  burger.classList.remove('header__burger_active');
  overlay.classList.remove('overlay_active');
});

overlay.addEventListener('click', () => {
  sideMenu.classList.remove('side-menu_active');
  burger.classList.remove('header__burger_active');
  overlay.classList.remove('overlay_active');
})

burger.addEventListener('click', () => {
 burger.classList.toggle('header__burger_active');
 sideMenu.classList.toggle('side-menu_active');
 overlay.classList.toggle('overlay_active');
})

button.forEach((item, i)=> {
item.addEventListener('click', () => {
  infoBlock.forEach((info, j) => {
    if (i === j) {
     info.classList.toggle('side-menu__info_active')
    } else {
      info.classList.remove('side-menu__info_active')
    }
  })
})
})

}

export default header;