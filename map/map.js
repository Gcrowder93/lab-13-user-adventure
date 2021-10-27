import quests from '../data/quest-data.js';
import { getUser, loadProfile } from '../utils.js';
// import { createCompletedQuest } from '../utils.js';
// import { createQuestLink } from '../utils.js';
import { hasCompletedAllQuests } from '../utils.js';
// import { loadProfile } from '../utils.js';
const user = getUser();
function displayLink(quest){
    const a = document.createElement('a');
    a.href = `../quest/?id=${quest.id}`;
    a.textContent = quest.title;
    a.classList.add('quest');
    a.style.top = quest.map.top;
    a.style.left = quest.map.left;

    mapLinks.appendChild(a);
}

function displaySpan(quest){
    const span = document.createElement('span');
    span.textContent = quest.title;
    span.classList.add('quest');
    span.style.top = quest.map.top;
    span.style.left = quest.map.left;

    mapLinks.appendChild(span);
}

const mapLinks = document.getElementById('map-links');

// for (let quest of quests){
//     const a = document.createElement('a');
//     a.href = `../quest/?id=${quest.id}`;
//     a.textContent = quest.title;
    

//     mapLinks.appendChild(a);
// }

for (let quest of quests){
    // if user has completed the quest
    if (user.completed[quest.id]){
        displaySpan(quest);
    } else {
        displayLink(quest);
    }
}



if (hasCompletedAllQuests(user)){
    window.location.replace('../win');
}

if (user.hp <= 0){
    window.location.replace('../end');
}
loadProfile();