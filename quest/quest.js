
import quests from '../data/quest-data.js';
import { findById } from '../utils.js';
import { getUser } from '../utils.js';
import { setUser } from '../utils.js';
import { scoreQuest } from '../utils.js';

const searchParams = new URLSearchParams(window.location.search);
const questData = findById(quests, searchParams.get('id'));
// const title = document.getElementById('quest-title');
title.textContent = questData.title;
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
button.textContent = 'Choose Your Choice';
questChoices.append(button);

questChoices.addEventListener('submit', (e)=>{
    e.preventDefault();
    e.preventDefault();
    const selectedRadio = document.querySelector('input[type="radio"]:checked');
    const choice = findById(questData.choices, selectedRadio.value);
    const user = getUser();
    scoreQuest(choice, questData.id, user);
    setUser(user);

    const questDetails = document.getElementById('quest-details');
    questDetails.classList.add('hidden');
    const questResults = document.getElementById('results');
    const resultP = document.createElement('p');
    resultP.textContent = choice.result;
    const backLink = document.createElement('a');
    backLink.href = '../map';
    backLink.textContent = 'Back to Map';
    questResults.append(resultP, backLink);
    questResults.className.remove('hidden');

});


    // const selectedId = document.querySelector('input[type="radio"]:checked');
    // const choice = findById(questData.choices, selectedId);
    // const user = getUser();
    // scoreQuest(choice, questData.id, user);
    // setUser(user);







{/* <label>
    {questData.choices[0].description)
    <input type="radio" name="choices" value={questData.choices[0].id} />
    </label> */}
    