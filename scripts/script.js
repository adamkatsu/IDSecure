// Nav Dropdown Interaction 

const navDropToggle = document.querySelectorAll('.nav-menu-toggle');

navDropToggle.forEach((x) => {
  const navDropMenu = x.querySelector('.nav-menu-dropdown');
  let mouseIsOver = false;

  x.querySelector('a').addEventListener('mouseenter', () => {
    mouseIsOver = true;
    mouseState()
  });
  x.querySelector('a').addEventListener('mouseleave', () => {
    mouseIsOver = false;
    mouseState()
  });
  navDropMenu.addEventListener('mouseleave', () => {
    mouseIsOver = false;
    mouseState()
  });
  navDropMenu.addEventListener('mouseenter', () => {
    mouseIsOver = true;
    mouseState()
  });

  function mouseState() {
    if(mouseIsOver) {
      navDropMenu.classList.add('nav-hover-active');
    } else {
      navDropMenu.classList.remove('nav-hover-active');
    }
  } 
});

// Mega Menu Interaction 



const menuBtn = document.querySelectorAll('.nav-menu-btn');
const navMain = document.querySelector('.nav-main');

for(btn of menuBtn) {
  btn.addEventListener('click', () => {
    console.log('click ok');
    navMain.classList.toggle('hide');

    if(navMain.classList.contains('hide')) {
      document.querySelector('body').style.overflow = 'unset';
    } else {
      document.querySelector('body').style.overflow = 'hidden';
    }
  })
}
