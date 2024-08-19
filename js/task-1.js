'use strict';

const liQuantity = document.querySelectorAll('li.item');
console.log(`Number of categories: ${liQuantity.length}`);

const categoriesItem = document.querySelectorAll('.item');


for (const item of categoriesItem) {
    const categoriesTitle = item.querySelector('h2').textContent;
    const countCategories = item.querySelectorAll('li').length;
    console.log('Category:', categoriesTitle);
    console.log('Elements:', countCategories);
}

