import { setUser, generateUser } from './utils.js';

const userForm = document.getElementById('user-form');
userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(userForm);
    const user = generateUser(formData);
    setUser(user);
    window.location.replace('./map');
});

