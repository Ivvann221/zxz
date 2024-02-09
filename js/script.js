document.addEventListener('DOMContentLoaded', function() {
  const bodyclick = document.querySelector('.body');
  const headerBurger = document.querySelector('.header__burger');
  const headerMenu = document.querySelector('.header__menu');
  const headerOverlay = document.querySelector('.header__overlay');


  headerBurger.addEventListener('click', function() {
    changeClass();
  });

  headerOverlay.addEventListener('click', function() {
    changeClass();
  });

  function changeClass() {
    bodyclick.classList.toggle('lock');
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    headerOverlay.classList.toggle('lock');
  }

  resizeHeight()
  function resizeHeight(){
      let vh = window.innerHeight;
      const xxx = document.querySelector('.main');
      xxx.style = `min-height: ${vh}px`;
  }
  window.addEventListener('resize', () => {
      resizeHeight()
  });

});
// tab
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabId = tab.dataset.tab;

     
        tabContents.forEach(content => {
            content.classList.add('d-none');
        });

        
        tabs.forEach(t => {
            t.classList.remove('active');
        });

        document.getElementById(tabId).classList.remove('d-none');
        tab.classList.add('active');
    });
});
// photo click
document.querySelectorAll('.cart img').forEach(item => {
  item.addEventListener('click', () => {
      const modal = document.querySelector('.modal');
      const modalImage = document.getElementById('modal-image');

      modal.style.display = 'flex';
      modalImage.src = item.src;

      modal.addEventListener('click', () => {
          modal.style.display = 'none';
      });
  });
});