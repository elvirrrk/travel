const pageHeader = document.querySelector('.header');
const toggleButton = document.querySelector('.header__toggle-button');
const mainBlock = document.querySelector('main');

pageHeader.addEventListener('click', (evt)=> {
  if(evt.target.className === 'header__toggle-button') {
    toggleButton.classList.add('header__toggle-button--active');
    mainBlock.style.position = 'fixed';
    mainBlock.style.zIndex = '-1';
  } else {
    toggleButton.classList.remove('header__toggle-button--active');
    mainBlock.style.position = 'static';
    mainBlock.style.zIndex = '0';
  }
});
