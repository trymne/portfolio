//list of all questions with answer. Used for finding a new favourite sport

const questions = [

    {
        empty: 'empty'
    },
    
    {
        question: 'Do you prefer teamwork or individual performances?',
        answerLeft: 'Individual', 
        answerRight: 'Teamwork',
    },
    
    {
        question: 'What\'s best, snow or ice?',
        answerLeft: 'Snow', 
        answerRight: 'Ice',
    },
    
    {
        question: 'Water sport are the best!',
        answerLeft: 'Yes!!', 
        answerRight: 'Booring!',
    },
    
    {
        question: 'Team sports should have goals!',
        answerLeft: 'Yes', 
        answerRight: 'No',
    },
    
    {
        question: 'Endurance sports are the best!',
        answerLeft: 'Yes!', 
        answerRight: 'Booring!'
    },
    
    {
        question: 'Team sports are always more interesting',
        answerLeft: 'Yes', 
        answerRight: 'No'
    },
    
    {
        question: 'So you need a boat, right?',
        answerLeft: 'Eh, no...', 
        answerRight: 'Obviously'
    },
    
    {
        question: 'How about combining shooting with sports?',
        answerLeft: 'That is too violent for me!', 
        answerRight: 'Best combination ever!'
    },
    
    {
        question: 'Do you want a high scoring sport?',
        answerLeft: 'That makes sense', 
        answerRight: 'Eww, water is bad!'
    },
    
    {
        question: 'If you don\'t have goals, you need water!',
        answerLeft: 'That makes sense', 
        answerRight: 'Eww, water is bad!'
    },
    
    {
        question: 'Sports are best when combined, right?',
        answerLeft: 'Eh, no...', 
        answerRight: 'Obviously'
    },
    
    {
        question: 'What would you rather watch?',
        answerLeft: 'Athletes spinning!', 
        answerRight: 'High speed!'
    },
    
    {
        question: 'Tactics makes sports more interesting',
        answerLeft: 'Yes', 
        answerRight: 'That\'s nonsense!'
    },
    
    {
        question: 'Right?',
        answerLeft: 'All I know is left!', 
        answerRight: 'Right, left, I do it all!'
    },
    
    {
        question: 'So then the athlete should be in the water?',
        answerLeft: 'Yes!', 
        answerRight: 'No, water is dangerous!'
    },
    
    {
        question: 'How about slalom in a boat?',
        answerLeft: 'Yes!', 
        answerRight: 'Boats should not do that!'
    },
    
    {
        question: 'Do you have a lot of time?',
        answerLeft: 'Never!', 
        answerRight: 'Yes!'
    },
    
    {
        question: 'With a gun then?',
        answerLeft: 'No', 
        answerRight: 'Yes, what else?'
    },
    
    {
        question: 'Do you think a sport needs a goalie?',
        answerLeft: 'Yes!', 
        answerRight: 'No!'
    },
    
    {
        question: 'Water sports are the best!',
        answerLeft: 'Yes!', 
        answerRight: 'I don\'t like water!'
    },
    
    {
        question: 'So then the athlete should get wet?',
        answerLeft: 'Nope', 
        answerRight: 'Obviously'
    },
    
    {
        question: 'Sports are meant to be outside!',
        answerLeft: 'Yes!', 
        answerRight: 'Ehh, no!'
    },
    
    {
        question: 'Do you prefer traditional sports, or new sports?',
        answerLeft: 'Traditional!', 
        answerRight: 'New!'
    },
    
    {
        question: 'Should the sport include shooting?',
        answerLeft: 'Yes!', 
        answerRight: 'No, guns are bad!'
    },
    
    {
        question: 'Winter + Skis =  . . .',
        answerLeft: 'True', 
        answerRight: 'False'
    },
    
    {
        question: 'What do you prefer?',
        answerLeft: 'Crazy speed', 
        answerRight: 'Insane jumps'
    },
    
    {
        question: 'And continous action?',
        answerLeft: 'Of course!', 
        answerRight: 'Hmm, that\'s too intense'
    },
    
    {
        question: 'What do you prefer?',
        answerLeft: 'Aesthetics', 
        answerRight: 'High speeds!'
    },
    
    {
        question: 'And a lot of crashes and action?',
        answerLeft: 'Yes!', 
        answerRight: 'No!'
    },
    
    {
        question: 'What do you prefer?',
        answerLeft: 'Aesthetics', 
        answerRight: 'High speeds!'
    }
    ]

    //creating a string with all the sports users can get. The order need to be correct for the page to work
const sports = [
    'swimming',
    'surfing',
    'canoeing',
    'single scull (rowing)',
    '100 meters',
    'golf',
    'archery',
    'shooting',
    'handball',
    'basketball',
    'water polo',
    'field hockey',
    'rowing',
    'synchronized swimming',
    'beach volleyball',
    'volleyball',
    'cross-country skiing',
    'ski mountaineering',
    'biathlon',
    'nordic combined',
    'freestyle skiing',
    'snowboard',
    'alpine skiing',
    'ski jumping',
    'ice hockey',
    'curling',
    'pair skating',
    'bobsleigh',
    'short-track speed skating',
    'speed skating',
    'figure skating',
    'skeleton'
]

// creating a string with all the sports wikipedia links
const links = [
    'https://en.wikipedia.org/wiki/Swimming_(sport)',
    'https://en.wikipedia.org/wiki/Surfing',
    'https://en.wikipedia.org/wiki/Canoeing_at_the_Summer_Olympics',
    'https://en.wikipedia.org/wiki/Rowing_(sport)',
    'https://en.wikipedia.org/wiki/100_metres',
    'https://en.wikipedia.org/wiki/Golf',
    'https://en.wikipedia.org/wiki/Archery_at_the_Summer_Olympics',
    'https://en.wikipedia.org/wiki/Shooting_at_the_Summer_Olympics',
    'https://en.wikipedia.org/wiki/Handball',
    'https://en.wikipedia.org/wiki/Basketball_at_the_Summer_Olympics',
    'https://en.wikipedia.org/wiki/Water_polo',
    'https://en.wikipedia.org/wiki/Field_hockey',
    'https://en.wikipedia.org/wiki/Sweep_rowing',
    'https://en.wikipedia.org/wiki/Synchronized_swimming',
    'https://en.wikipedia.org/wiki/Beach_volleyball',
    'https://en.wikipedia.org/wiki/Volleyball',
    'https://en.wikipedia.org/wiki/Cross-country_skiing',
    'https://en.wikipedia.org/wiki/Ski_mountaineering',
    'https://en.wikipedia.org/wiki/Biathlon',
    'https://en.wikipedia.org/wiki/Nordic_combined',
    'https://en.wikipedia.org/wiki/Freestyle_skiing',
    'https://en.wikipedia.org/wiki/Snowboard',
    'https://en.wikipedia.org/wiki/Alpine_skiing',
    'https://en.wikipedia.org/wiki/Ski_jumping',
    'https://en.wikipedia.org/wiki/Ice_hockey',
    'https://en.wikipedia.org/wiki/Curling',
    'https://en.wikipedia.org/wiki/Pair_skating',
    'https://en.wikipedia.org/wiki/Bobsleigh',
    'https://en.wikipedia.org/wiki/Short-track_speed_skating',
    'https://en.wikipedia.org/wiki/Speed_skating',
    'https://en.wikipedia.org/wiki/Single_skating',
    'https://en.wikipedia.org/wiki/Skeleton_(sport)'
]