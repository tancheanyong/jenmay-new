//navbar scroll animation
const scrollFunc = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.querySelector(".navbar").style.height = "60px";
    } else {
      document.querySelector(".navbar").style.height = "100px";
    }
  }
  
  
  window.onscroll = () => scrollFunc();
  
  //navbar hidden menu on mobile mode
  const navbarIcon = document.querySelector(".navbarIcon");
  const hiddenMenuIcon = document.querySelector('.hiddenMenu-ulIcon');
  const hiddenMenu = document.querySelector('.hiddenMenu');
  const list = document.querySelector('.hiddenMenu-ul').querySelectorAll('.hiddenMenu-ul-li');
  
  navbarIcon.addEventListener('click', () => {
    console.log(list);
    hiddenMenu.style.width = '90%';
    hiddenMenuIcon.style.display = 'block';
    list[0].style.width = 'auto';
    list[1].style.width = 'auto';
    list[2].style.width = 'auto';
  });
  hiddenMenuIcon.addEventListener('click', () => {
    hiddenMenu.style.width = '0'
    hiddenMenuIcon.style.display = 'none';
    list[0].style.width = '0';
    list[1].style.width = '0';
    list[2].style.width = '0';
  });
  