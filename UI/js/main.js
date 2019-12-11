'use strict';

const url = 'http://10.114.32.156/bigHome';

const openMenu =  () => {
    document.getElementById("side-menu").style.display="block";
    document.getElementById("menu-btn").style.display="none";
    document.getElementById("close-btn").style.display="block";
};

const closeMenu =  () => {
    document.getElementById("side-menu").style.display="none";
    document.getElementById("menu-btn").style.display="block";
    document.getElementById("close-btn").style.display="none";
};

 document.getElementById('menu-btn').addEventListener('click',openMenu);
 document.getElementById('close-btn').addEventListener('click',closeMenu);

 
const productCard = document.querySelector('.product-card');
const ul = document.querySelector('ul');

// create a card for each product that it posted on the main page
const createProductsCards = (products) => {

    productCard.innerHTML = ''; // clear product cards list
    products.forEach((product) => {

      // create grid of products with DOM methods
      const card = document.createElement('div');
      const img = document.createElement('img');
      img.src = url + '/thumbnails/' + product.file_name;
      img.alt = product.name;
      img.classList.add('card-img');

      const figure = document.createElement('figure').appendChild(img);
      const h2 = document.createElement('h2');
      h2.style.fontSize='15px';
      h2.innerHTML =`Price:${product.price}e` ;

      const p1 = document.createElement('p');
      p1.style.color = ' #e07d17';
      p1.innerHTML = product.name;

      const p2 = document.createElement('p');
      p2.innerHTML = product.description;
      
      card.classList.add('card-item');
      card.appendChild(figure);
      card.appendChild(p1);
      card.appendChild(h2);
      card.appendChild(p2);
      productCard.appendChild(card);
    });
};

// AJAX  CALL, fetching products

const getProductAll = async () => {

    try {
      const response = await fetch(url + '/product/');
      const products = await response.json();
      createProductsCards(products[0]);
    }

    catch (e) {
      console.log(e.message);
    }
};

// filter products by category; event handler implemented to fetch by category

const categoryList = document.querySelectorAll('.category');
categoryList.forEach(li => li.addEventListener('click',async (category) => {
  category = li.textContent;

  try {
    const response = await fetch(url + '/product/' + category);
    const products = await response.json();
    createProductsCards(products[0]);
  }

  catch (e) {
    console.log(e.message);
  }

}));

getProductAll();
