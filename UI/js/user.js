'use strict';
const url = 'http://localhost:3000'; // change url when uploading to server

const main = document.querySelector('main');
const addForm = document.querySelector('#addProductForm');
const modForm = document.querySelector('#mod-product-form');
const productCard = document.querySelector('.product-card');
const imageModal = document.querySelector('#image-modal');
const modalImage = document.querySelector('#image-modal img');
const close = document.querySelector('#image-modal a');

// create a card for each product that it is posted by a particular user
const createProductCards = (products) => {

    productCard.innerHTML = ''; // clear product cards list
    products.forEach((product) => {

      // create grid of products with DOM methods
      const card = document.createElement('div');
      const img = document.createElement('img');
      img.src = url + '/thumbnails/' + product.file_name;
      img.alt = product.name;
      img.classList.add('card-img');

       // open large image when clicking image
       img.addEventListener('click', () => {
        modalImage.src = url + '/' + product.file_name;
        imageModal.alt = product.name;
        imageModal.classList.toggle('hide');
        try {
            const coords = JSON.parse(product.metadata);
            // console.log(coords);
            addMarker(coords);
        } catch (e) {
        }
     });

      const figure = document.createElement('figure').appendChild(img);
      const h2 = document.createElement('h2'); h2.style.color = ' #e07d17';
      h2.innerHTML = product.price;

      const p1 = document.createElement('p');
      p1.innerHTML = product.name;

      const p2 = document.createElement('p');
      p2.innerHTML = product.description;

      const p3 = document.createElement('p');
      p3.innerHTML = product.category;

      const p4 = document.createElement('p');
      p4.innerHTML = product.specification;

      const modButton = document.createElement('button');
        modButton.innerHTML = 'Modify';
        modButton.addEventListener('click', () => {
            const inputs = modForm.querySelectorAll('input');
            inputs[0].value = product.name;
            inputs[1].value = product.price;
            inputs[2].value = product.specification;
            inputs[3].value = product.category;
        
        });
      
      card.classList.add('card-item');
      card.appendChild(figure);
      card.appendChild(p1);
      card.appendChild(h2);
      card.appendChild(p2);
      card.appendChild(p3);
      card.appendChild(p4);
      card.appendChild(modButton);
      productCard.appendChild(card);

    });
};

// AJAX call

const getProduct = async () => {
    console.log('getProduct token ', sessionStorage.getItem('token'));
    try {
        const options = {
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
            },
        };
        const response = await fetch(url + '/product', options);
        const products = await response.json();
        createProductCards(products[0]);
    }
    catch (e) {
        console.log(e.message);
    }
};

// submit add product form
addForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const fd = new FormData(addForm);
    const fetchOptions = {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
        },
        body: fd,
    };
    const response = await fetch(url + '/product', fetchOptions);
    const json = await response.json();
    console.log('add response', json);
    getProduct();
});

// submit modify form
modForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const data = serializeJson(modForm);
    const fetchOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
        },
        body: JSON.stringify(data),
    };

    console.log(fetchOptions);
    const response = await fetch(url + '/product', fetchOptions);
    const json = await response.json();
    console.log('modify response', json);
    getProduct();
});

 getProduct();
