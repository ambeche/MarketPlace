'use strict';
const url = 'http://localhost:3000';
/*

const loginwrapper = document.querySelector('#Login');
const addUserForm = document.querySelector('#Registering');


// create user options to <select>
const createUserOptions = (users) => {
    userLists.forEach((list) => {
      // clear user list
      list.innerHTML = '';
      users.forEach((user) => {
        // create options with DOM methods
        const option = document.createElement('option');
        option.value = user.user_id;
        option.innerHTML = user.name;
        option.classList.add('light-border');
        list.appendChild(option);
      });
    });
  };

//getting users
const getUsers = async () => {
    try {
      const options = {
        headers: {
          'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
        },
      };
      const response = await fetch(url + '/user', options);
      const users = await response.json();
      createUserOptions(users);
    }
    catch (e) {
      console.log(e.message);
    }
  };

// login
loginwrapper.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const data = serializeJson(loginwrapper);
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
      // show/hide forms + cats
      loginwrapper.style.display = 'none';
      logOut.style.display = 'block';
      main.style.display = 'block';
     
      getCat();
      getUsers();
    }
  });

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
    loginwrapper.style.display = 'none';
    logOut.style.display = 'block';
    main.style.display = 'block';
    
    getCat();
    getUsers();
  });
  */