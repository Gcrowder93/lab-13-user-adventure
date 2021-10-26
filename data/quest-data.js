const dragon = {
    id: 'dragon',
    title: 'Elvarg The Dragon!',
    map: {
        top: '17%',
        left: '37%'
    },
    image: 'elvarg.png',
    description: `
    watch out for that big ol' dragon
    `,
    choices: [{
        id: 'run',
        description: 'RUN!',
        result: `You realize your horrible mistake, so you turn around and run out of the cave. As you run towards the exit, he scorches your behind with a fireball, dealing 5 damage.
        `,
        hp: -5,
        gold: 0
    }, {
        id: 'fight',
        description: 'FIGHT!',
        result: `
        Underestimating the dragon, he smacks you with his tail! It sends you flying out of the cave, rolling down the mountain, for 30 damage.
        `,
        hp: -30,
        gold: 0
    }, {
        id: 'chat',
        description: 'Chat?',
        result: `You ask the dragon how his day is going. He looks as you surprised, and speaks. Without knowing, hours have gone by. You decide to go on your way. Elvarg allows you take 50 Gold that is scattered about. "Why?" you ask him. Elvarg responds, No one has ever tried to be nice to me. You leave..wealthy.
        `,
        hp: 0,
        gold: 50
    }]
};

const village = {
    id: 'village',
    title: 'Varrock',
    map: {
        top: '89%',
        left: '44%'
    },
    image: ' ',
    description: `You find yourself standing in the middle of a crowded village square..
    `,
    choices: [{
        id: 'tavern',
        description: `Go to the Blue Moon Inn.(5 Gold Required)
        `,
        result: `You walk in and immediately notice a board with a special of the day. It's shark. You decide to try it, and toss the bartender 5 Gold, whilst gaining 5 hitpoints.
        `,
        hp: +5,
        gold: -5
    }, {
        id: 'old woman',
        description: 'Approach elderly shopkeeper.',
        result: `You approach an elderly shopkeeper struggling to carry crates inside. You offer help without question. Unfortunately, while carrying a crate, you tweaked your back for 5 damage. Once you finished helping you leave, and she hands you 10 Gold for your troubles. 
        `,
        hp: -5,
        gold: +5
    }, {
        id: 'drunkard',
        description: 'Confront village drunkard yelling at people?',
        result: `You noticed the village drunkard was heckling a group of monks as they walked by him. You decide to say something and it starts a fight. Despite his level of intoxication, you lose the fight, taking 10 damage. While you are laying on the ground, the drunkard stumbles away, dropping his coin purse without knowing. Giving you 5 Gold.
        `,
        hp: -10,
        gold: +5
    }]
};

const shrine = {
    id: 'shrine',
    title: 'An Ancient Shrine',
    map: {
        top: '31%',
        right: '75%'
    }, image: ' ',
    description: `You head up the hill to an ancient shrine you've heard stories about.
    `,
    choices: [{
        id: 'pray',
        description: 'Pray?',
        result: `You pray at the ancient shrine and instantly feel healed for 10 hitpoints.
        `,
        hp: +10,
        gold: 0
    }, {
        id: 'disgrace',
        description: 'Disgrace?',
        result: `Realizing you all of a sudden have to take a leak, and having no regard for religious beliefs, you relieve yourself on the shrine. As you turn around to leave, you slip in your own piss, falling and hitting your head for 5 damage.
        `,
        hp: -5,
        gold: 0
    }, {
        id: 'steal',
        description: 'Steal?',
        result: `You swipe the glowing ancient artifact off the shrine. You quickly turn around and run, making away with what you assume is worth 100 Gold at least. However, as you depart, you are struck down by lightening! Dealing over 9000 damage, cleaning the world of a thief.
        `,
        hp: -9000,
        gold: 0
    }]
};

const quests = [
    dragon,
    village,
    shrine,
];

export default quests;