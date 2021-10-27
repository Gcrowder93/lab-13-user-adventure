export function findById(array, id) {
    for (let index = 0; index < array.length; index++) {
        const item = array[index];
        if (item.id === id) {
            return item;
        }
    }
    return null;
}

// export function findById(userObject){
//     for (let item of items){
//         if (item.id === id){
//             return item;
//         }
//     }
// }

export function setUser(userObject){
    const userString = JSON.stringify(userObject);
    localStorage.setItem('USER', userString);
}

export function generateUser(formData){
    const user = {
        completed: {},
        hp: 35,
        gold: 0,
        name: formData.get('name'),
        race: formData.get('race'),
    };
    return user;
}

export const newMakeUser = (formData) => ({
    name: formData.get('name'),
    race: formData.get('race'),
    hp: 35,
    gold: 0,
    completed: {}
});

export default generateUser;

export function getUser(){
    const userString = localStorage.getItem('USER');
    return JSON.parse(userString);
}

export function scoreQuest(choiceObject, questId, userObject){
    userObject.hp += choiceObject.hp;
    userObject.gold += choiceObject.gold;
    userObject.completed[questId] = true;
}

console.log(scoreQuest);

export function createQuestLink(quest) {
    const link = document.createElement('a');
    link.classList.add('quest');

    // const searchParams = new URLSearchParams();
    // searchParams.set('id', quest.id);
    // link.href = 'quest?' + searchParams.toString();
    link.href = '../quest/?id=' + quest.id;

    link.style.top = quest.map.top;
    link.style.left = quest.map.left;
    link.textContent = quest.title;

    return link;
}

export function createCompletedQuest(quest) {
    const span = document.createElement('span');
    span.classList.add('quest');
    span.classList.add('completed');

    span.style.top = quest.map.top;
    span.style.left = quest.map.left;

    span.textContent = quest.title;
    return span;
}

export function hasCompletedAllQuests(quests, user) {
    // iterate through quests
    for (let i = 0; i < quests.length; i++) {
        const quest = quests[i];
        // if any of the quests is incomplete
        if (!user.completed[quest.id]) {
            return false;
        }
    }

    // if all of the quests are complete, we get this far and return true
    return true;
}

export function createChoice(choice) {
    const label = document.createElement('label');
    label.classList.add('choice');

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'choice';
    radio.required = true;
    radio.value = choice.id;
    label.appendChild(radio);

    const description = document.createElement('span');
    description.textContent = choice.description;
    label.appendChild(description);

    return label;
}

console.log(createChoice);