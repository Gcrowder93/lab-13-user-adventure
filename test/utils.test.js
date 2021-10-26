// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { setUser } from '../utils.js';
import { generateUser } from '../utils.js';


const test = QUnit.test;

test('generateUser should return a userObject', (expect) => {
    const expected = {
        completed: {},
        gold: 0,
        hp: 35,
        name: 'chase',
        race: 'mage',
    };
    const formData = new FormData();
    formData.set('name', 'chase');
    formData.set('race', 'mage');
    const actual = generateUser(formData);
    expect.deepEqual(actual, expected);
});

test('setUser should save user to localStorage', (expect)=>{
    localStorage.removeItem('USER');
    const userObject = {
        completed: {},
        gold: 0,
        hp: 35,
        name: 'chase',
        race: 'mage',
    };

    setUser(userObject);
    const actual = JSON.parse(localStorage.getItem('USER'));

    expect.deepEqual(actual, userObject);
});
