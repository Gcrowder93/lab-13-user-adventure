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
    const user = {
        name: formData.get('name'),
        race: formData.get('race'),
        hp: 35,
        gold: 0,
        completed: {}
    };

    return user;

    
    
    // return {
    //     completed: {},
    //     gold: 0,
    //     hp: 35, 
    //     name: formData.get(), // these are user objects
    //     race: formData.get(),
    // };
}

export function setUser(userObject){
    const userString = JSON.stringify(userObject);
    localStorage.setItem('USER', userString);
}

