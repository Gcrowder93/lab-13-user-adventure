// import our quest data
import quests from '../data/quest-data.js';
import { findById } from '../utils.js';
// use search params to determine which quest to display
const params = new URLSearchParams(window.location.search);
const questData = findById(quests, params.get('id'));
// update all our HTML elements with the quest data

const title = document.getElementById('quest-title');
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
    input.type = 'radio'; //these names dont matter, could be booger
    input.name = 'choices'; //these names dont matter, could be booger
    input.value = choice.id;

// these add multiple buttons from our choice array in data

    label.appendChild(input);
    questChoices.append(label);
}

{/* <label>
    {questData.choices[0].description)
    <input type="radio" name="choices" value={questData.choices[0].id} />
    </label> */}
    