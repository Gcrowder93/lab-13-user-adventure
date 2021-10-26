export function findById(array, id) {
    for (let index = 0; index < array.length; index++) {
        const item = array[index];
        if (item.id === id) {
            return item;
        }
    }

    return null;
}

export function generateUser(formData){
//     return {completed: {}}
//     gold: 0,
//     hp: 35,
//     name: chase,
//     race: mage,
// };

    return {
        completed: {},
        gold: 0,
        hp: 35, 
        name: formData.get('chase'), // these are user objects
        race: formData.get('mage'),
    };
}

export function setUser(userObject){
    const userString = JSON.stringify(userObject);
    localStorage.setItem('USER', userString);
}