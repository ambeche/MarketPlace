'use strict';
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
const url_product = 'http://10.114.32.156/market/product';
//const url_user = 'http://10.114.32.156/market/user'
const ul = document.querySelector('ul');

// create product cards
const create_productCards = (products) => {
    // clear ul
    ul.innerHTML = '';
    products.forEach((product) => {
        // create li with DOM methods
        const img = document.createElement('img');
        img.src = url + '/' + product.filename;
        img.alt = product.name;
        img.classList.add('resp');

        const figure = document.createElement('figure').appendChild(img);

        const h2 = document.createElement('h2');
        h2.innerHTML = product.name;

        const p1 = document.createElement('p');
        p1.innerHTML = `Price: ${product.price}`;

        const p2 = document.createElement('p');
        p2.innerHTML = product.description;

        const p3 = document.createElement('p');
        p3.innerHTML = `Owner: ${product.ownername}`;
    });
};