'use strict';
const url = 'http://localhost:3000';
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
// select existing html elements
const loginWrapper = document.querySelector('#login-wrapper');
const userInfo = document.querySelector('#user-info');
const logOut = document.querySelector('#log-out');
const main = document.querySelector('main');
const loginForm = document.querySelector('#login-form');
const addUserForm = document.querySelector('#add-user-form');
const addForm = document.querySelector('#add-cat-form');
const modForm = document.querySelector('#mod-cat-form');
const ul = document.querySelector('ul');
const userLists = document.querySelectorAll('.add-owner');
const imageModal = document.querySelector('#image-modal');
const modalImage = document.querySelector('#image-modal img');
const close = document.querySelector('#image-modal a');


signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});
// create product cards
const createProductCards = (products) => {
    // clear ul
    ul.innerHTML = '';
    products.forEach((product) => {
        // create li with DOM methods
        const img = document.createElement('img');
        img.src = url + '/thumbnails/' + product.filename;
        img.alt = product.name;
        img.classList.add('resp');

        // open large image when clicking image
        img.addEventListener('click', () => {
            modalImage.src = url + '/' + product.filename;
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
        h2.innerHTML = product.name;

        const p1 = document.createElement('p');
        p1.innerHTML = ` ${product.price}`;

        const p2 = document.createElement('p');
        p2.innerHTML = ` ${product.specification}`;

        const p3 = document.createElement('p');
        p3.innerHTML = ` ${product.category}`;

        // add selected product's values to modify form
        const modButton = document.createElement('button');
        modButton.innerHTML = 'Modify';
        modButton.addEventListener('click', () => {
            const inputs = modForm.querySelectorAll('input');
            inputs[0].value = product.name;
            inputs[1].value = product.price;
            inputs[2].value = product.specification;
            inputs[3].value = product.category;
            modForm.querySelector('select').value = product.owner;
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

// login
loginForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const data = serializeJson(loginForm);
    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };

    const response = await fetch(url + '/auth/login', fetchOptions);
    const json = await response.json();
    console.log('login response', json);
    if (!json.user) {
        alert(json.message);
    } else {
        // save token
        sessionStorage.setItem('token', json.token);
        // show/hide forms + products
        loginWrapper.style.display = 'none';
        logOut.style.display = 'block';
        main.style.display = 'block';
        userInfo.innerHTML = `Hello ${json.user.name}`;
        getProduct();

    }
});
// logout
logOut.addEventListener('click', async (evt) => {
    evt.preventDefault();
    try {
        const options = {
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
            },
        };
        const response = await fetch(url + '/auth/logout', options);
        const json = await response.json();
        console.log(json);
        // remove token
        sessionStorage.removeItem('token');
        alert('You have logged out');
        // show/hide forms + cats
        loginWrapper.style.display = 'flex';
        logOut.style.display = 'none';
        main.style.display = 'none';
    }
    catch (e) {
        console.log(e.message);
    }
});
// submit register form
addUserForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const data = serializeJson(addUserForm);
    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };
    const response = await fetch(url + '/auth/register', fetchOptions);
    const json = await response.json();
    console.log('user add response', json);
    // save token
    sessionStorage.setItem('token', json.token);
    // show/hide forms + cats
    loginWrapper.style.display = 'none';
    logOut.style.display = 'block';
    main.style.display = 'block';
    userInfo.innerHTML = `Hello ${json.user.name}`;
    getCat();
    getUsers();
});