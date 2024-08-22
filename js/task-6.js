'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input[type=number]');  
const createBtnEl = document.querySelector('button[data-create]');  
const destroyBtnEl = document.querySelector('button[data-destroy]');  
const boxEl = document.querySelector('#boxes');  

function createBoxes() {  
  const amount = parseInt(inputEl.value);  
  if (amount >= 1 && amount <= 100) {  
    const boxes = [];  
    for (let i = 0; i < amount; i++) {  
      const box = document.createElement('div');  
      box.style.background = getRandomHexColor();  
      box.style.width = `${30 + 10 * i}px`;  
      box.style.height = `${30 + 10 * i}px`;  
      boxes.push(box);  
    }  
    boxEl.append(...boxes);  
    inputEl.value = '';  
  }  
}  

function destroyBoxes() {  
  boxEl.innerHTML = '';  
}  

createBtnEl.addEventListener('click', createBoxes);  
destroyBtnEl.addEventListener('click', destroyBoxes); 