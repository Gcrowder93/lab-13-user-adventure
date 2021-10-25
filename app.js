import { generateUser, setUser } from './utils.js';

// grab user form
const userForm = document.getElementById('user-form');

// on form submit
userForm.addEventListener('submit', (e)=>{

    e.preventDefault();
  //
    const formData = new FormData(userForm);

    const userObj = generateUser(formData);

    setUser(userObj);
    window.location.replace('./map');
});






// console.log(window.location.search);
// const params = new URLSearchParams(window.location.search);

// const color = params.get('color');

// const mySquare = document.getElementById('square');
// mySquare.classList.add(color);

// on form submit, create FormData object
// pass to generateUser function
// save to localStorage

