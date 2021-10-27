
import quests from '../data/quest-data.js';
import { findById } from '../utils.js';
import { getUser } from '../utils.js';
import { setUser } from '../utils.js';
import { scoreQuest } from '../utils.js';

const searchParams = new URLSearchParams(window.location.search);
const questData = findById(quests, searchParams.get('id'));

const title = document.getElementById('quest-title');
// title.textContent = questData.title;
const img = document.getElementById('quest-image');
img.src = `../assets/${questData.image}`;
const description = document.getElementById('quest-description');
description.textContent = questData.description;
const questChoices = document.getElementById('quest-choices');
for (let choice of questData.choices){
    const label = document.createElement('label');
    label.textContent = choice.description;

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'choices';
    input.value = choice.id;
    label.appendChild(input);
    questChoices.append(label);
}


const button = document.createElement('button');
questChoices.append(button);

// button.textContent = 'Choose Your Choice';

questChoices.addEventListener('submit', (e)=>{
    e.preventDefault();
    const selectedId = document.querySelector('input[type="radio"]:checked');
    const choice = findById(questData.choice, selectedId);
    const user = getUser();
    scoreQuest(choice, questData.id, user);
    setUser;
clg
});





{/* <label>
    {questData.choices[0].description)
    <input type="radio" name="choices" value={questData.choices[0].id} />
    </label> */}
    