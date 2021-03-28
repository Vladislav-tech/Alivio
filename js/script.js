const menuBtn = document.querySelectorAll('.menu-btn');

menuBtn[0].addEventListener('click', function() {
  console.log('click');
  const menu = document.querySelector('.menu');
  const menuList = document.querySelector('.menu__list');
  const headerButtons = document.querySelector('.header__buttons');


  if  (menu.classList[1] !== 'menu-respnosive') {
    menu.classList.add('menu-respnosive');
    menuList.classList.add('menu__list-responsive');
    headerButtons.classList.add('header__buttons-responsive');

  } else {
    menu.classList.remove('menu-respnosive');
    menuList.classList.remove('menu__list-responsive');
    headerButtons.classList.remove('header__buttons-responsive');

  }
});
