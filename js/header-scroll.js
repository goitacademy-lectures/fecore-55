window.onscroll = () => changeHeaderBackground();

function changeHeaderBackground() {
  const header = document.getElementById('header');
  const headerOffsetTrigger = header.offsetTop;
  const pageOffset = window.pageYOffset;

  if (pageOffset > headerOffsetTrigger) {
    header.classList.add('js-no-transparency');
  } else {
    header.classList.remove('js-no-transparency');
  }
}
