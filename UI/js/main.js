'use strict';

const url = 'http://localhost:3000';

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

 /*---------------featured-categories--------------*/

//const url_product = 'http://10.114.32.156/market/product';

//const url_user = 'http://10.114.32.156/market/user'

const ul = document.querySelector('ul');

const createProductsCards = (products) => {
    // clear ul

    ul.innerHTML = '';
    products.forEach((product) => {

      // create li with DOM methods

      const img = document.createElement('img');
      img.src = url + '/' + product.file_name;
      img.alt = product.name;
      img.classList.add('resp');

      const figure = document.createElement('figure').appendChild(img);
      const h2 = document.createElement('h2');
      h2.innerHTML = product.name;

      const p1 = document.createElement('p');
      p1.innerHTML = `price: ${product.price}`;

      const p2 = document.createElement('p');
      p2.innerHTML = `description: ${product.description}`;

      const li = document.createElement('li');
      li.classList.add('light-border');

      li.appendChild(h2);
      li.appendChild(figure);
      li.appendChild(p1);
      li.appendChild(p2);
      ul.appendChild(li);
    });
};

//AJAX  CALL

const get_product_All = async () => {

    try {
      const response = await fetch(url + '/product/');
      const products = await response.json();
      createProductsCards(products[0]);
    }

    catch (e) {
      console.log(e.message);
    }
};

get_product_All();
