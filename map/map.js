import quests from '../data/quest-data.js';

// import quest data
// get map-links element from html
const mapLinks = document.getElementById('map-links');
console.log(mapLinks);
// loop through each quest
for (let quest of quests){

// generate an <a> for each quest with href = "quest?id=<questionId>"
    // <a href="./quest/?id=dragon">a hairy!!! dragon</a>
    // <a href="./quest/?id=monsters">A den of monsters</a>
    // <a href="./quest/?id=treasure">golden treasure</a>
    const a = document.createElement('a');
    a.href = `../quest/?id=${quest.id}`;
    a.textContent = quest.title;

    // append the link to the map-links element
    mapLinks.appendChild(a);
}
