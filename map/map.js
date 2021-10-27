import quests from '../data/quest-data.js';
import { getUser } from '../utils.js';
import { createCompletedQuest } from '../utils.js';
import { createQuestLink } from '../utils.js';
import { hasCompletedAllQuests } from '../utils.js';
import { loadProfile } from '../utils.js';
const mapLinks = document.getElementById('map-links');
// function displayLink(quest){
//     const a = document.createElement('a');
//     a.href = `../quest/?id=${quest.id}`;
//     a.textContent = quest.title;
//     a.classList.add('quest');
//     a.style.top = quest.map.top;
//     a.style.left = quest.map.left;

//     mapLinks.appendChild(a);
// }
for (let quest of quests){

// generate an <a> for each quest with href = "quest?id=<questionId>"
    // <a href="./quest/?id=dragon">a hairy!!! dragon</a>
    // <a href="./quest/?id=monsters">A den of monsters</a>
    // <a href="./quest/?id=treasure">golden treasure</a>
    const a = document.createElement('a');
    a.href = `../quest/?id=${quest.id}`;
    a.textContent = quest.title;

    mapLinks.appendChild(a);
}

const user = getUser();
loadProfile();


// if (isDead(user) || hasCompletedAllQuests(quests, user)) {
//     window.location = '../results';
// }
// const nav = document.getElementById('quests');

// for (let quest of quests) {

//     let questDisplay = null;
//     const theUserHasCompletedThisQuest = user.completed[quest.id];

//     if (theUserHasCompletedThisQuest) {
//         questDisplay = createCompletedQuest(quest);
//     }
//     else {
//         questDisplay = createQuestLink(quest);
//     }
//     nav.appendChild(questDisplay);
// }