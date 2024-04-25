
/**
 * This script wrapped in a Immediately-Invoked Function Expression (IIFE) to
 * prevent variables from leaking onto the global scope. For more information
 * on IIFE visit the link below.
 * @see http://en.wikipedia.org/wiki/Immediately-invoked_function_expression
 */

(function() {
  'use strict';

  // Load all images via Squarespace's Responsive ImageLoader
  function loadAllImages() {
    var images = document.querySelectorAll('img[data-src]' );
    for (var i = 0; i < images.length; i++) {
      ImageLoader.load(images[i], {load: true});
    }
  }

  // The event subscription that loads images when the page is ready
  document.addEventListener('DOMContentLoaded', loadAllImages);

  // The event subscription that reloads images on resize
  window.addEventListener('resize', loadAllImages);

}());

const btnMenu = document.getElementById('nav-btn');
const navMenu = document.querySelector('.site-navigation-wrapper');
btnMenu.addEventListener('click', () => {
  navMenu.classList.toggle('site-navigation-active');
})

const navDropToggle = document.querySelectorAll('.nav-menu-toggle');


navDropToggle.forEach((x) => {
  const navDropMenu = x.querySelector('.nav-menu-dropdown');

  let mouseIsOver = false;

  x.addEventListener('mouseenter', () => {
    mouseIsOver = true;
    console.log(mouseIsOver);
    mouseState()
  });
  x.addEventListener('mouseleave', () => {
    mouseIsOver = false;
    console.log(mouseIsOver);
    mouseState()
  });
  navDropMenu.addEventListener('mouseleave', () => {
    mouseIsOver = false;
  });
  navDropMenu.addEventListener('mouseenter', () => {
    mouseIsOver = true;
  });

  function mouseState() {
    if(mouseIsOver) {
      navDropMenu.classList.add('nav-hover-active');
    } else {
      navDropMenu.classList.remove('nav-hover-active');
    }
  } 
})

