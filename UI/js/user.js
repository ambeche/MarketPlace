'use strict';
const url = 'http://localhost:3000'; // change url when uploading to server

const main = document.querySelector('main');
const addForm = document.querySelector('#addProductForm');
const modForm = document.querySelector('#mod-product-form');
const ul = document.querySelector('ul');
// const userLists = document.querySelectorAll('.add-owner');
const imageModal = document.querySelector('#image-modal');
const modalImage = document.querySelector('#image-modal img');
const close = document.querySelector('#image-modal a');
// create product cards
const createProductCards = (products) => {
    // clear ul
    ul.innerHTML = '';
    products.forEach((product) => {
        // create li with DOM methods
        console.log(product);
        console.log(product.file_name);
        const img = document.createElement('img');
        img.src = url + '/thumbnails/' + product.file_name;
        img.alt = product.name;
        img.classList.add('resp');

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

        const h2 = document.createElement('h2');
        h2.innerHTML =`${product.name}` ;

        const p1 = document.createElement('p');
        p1.innerHTML = `Price:${product.price}e`;

        const p2 = document.createElement('p');
        p1.innerHTML = `Description: ${product.description}`;

        const p3 = document.createElement('p');
        p2.innerHTML = `Specification: ${product.specification}`;

        const p4 = document.createElement('p');
        p3.innerHTML = `Category:${product.category}`;

        // add selected product's values to modify form
        const modButton = document.createElement('button');
        modButton.innerHTML = 'Modify';
        modButton.addEventListener('click', () => {
            const inputs = modForm.querySelectorAll('input');
            inputs[0].value = product.name;
            inputs[1].value = product.price;
            inputs[2].value = product.description;
            inputs[3].value = product.specification;
            inputs[4].value = product.category;
        });


        const li = document.createElement('li');
        li.classList.add('light-border');

        li.appendChild(h2);
        li.appendChild(figure);
        li.appendChild(p1);
        li.appendChild(p2);
        li.appendChild(p3);
        li.appendChild(modButton);
        ul.appendChild(li);
    });
};
//  // close modal
// close.addEventListener('click', (evt) => {
//      evt.preventDefault();
//    imageModal.classList.toggle('hide');
//  });

// AJAX call

const get_product = async () => {
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

get_product();

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
    get_product();
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
    get_product();
});


