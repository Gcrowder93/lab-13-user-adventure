import { setUser, generateUser } from './utils.js';

const userForm = document.getElementById('user-form');
console.log(userForm);
userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(userForm);
    const user = generateUser(formData);
    setUser(user);
    window.location.replace('./map');
});

console.log(generateUser);
console.log(setUser);
