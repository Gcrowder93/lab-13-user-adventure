import quests from '../data/quest-data.js';
import { getUser } from '../utils.js';
const mapLinks = document.getElementById('map-links');
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

// // if they're dead, or if they've completed all the quests
// if (isDead(user) || hasCompletedAllQuests(quests, user)) {
//     // send them to the results page
//     window.location = '../results';
// }
// // getting some quest element from DOM
// const nav = document.getElementById('quests');

// for (let quest of quests) {
//     // for every quest
//     let questDisplay = null;
//     // if the user has completed it

//     console.log(quest.id);
//     const theUserHasCompletedThisQuest = user.completed[quest.id];

//     if (theUserHasCompletedThisQuest) {
//         // make a completed quest display (with a checkmark)
//         questDisplay = createCompletedQuest(quest);
//     }
//     else {
//         // otherwiese, make a link to the quest
//         questDisplay = createQuestLink(quest);
//     }
//     nav.appendChild(questDisplay); // add the quest display to the nav
// }