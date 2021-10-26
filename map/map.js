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

