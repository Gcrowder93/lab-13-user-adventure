import quests from '../data/quest-data.js';
import { loadProfile } from '../utils.js';

export function hasCompletedAllQuests(userObject){
    for (let quest of quests){
        if (!userObject.completed[quest.id]){
            return false;
        }
    }
    return true;
}

loadProfile();