'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const colorEl = document.querySelector('.color');
const changeColorEl = document.querySelector('.change-color');


const handleClick = event => {
  const getColor = getRandomHexColor();
  colorEl.textContent = getColor;
  bodyEl.style.background = getColor;

}

bodyEl.addEventListener('click', handleClick);