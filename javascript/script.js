
//constructor function. This will be shown if the user lands on swimming (answer all left), 100m or speed skating
function Athlete (Athlete_name, Athlete_age, Athlete_sport, Athlete_active, Athlete_golds) {
    this.name = Athlete_name,
    this.age = Athlete_age,
    this.sport = Athlete_sport,
    this.active = Athlete_active,
    this.golds = Athlete_golds,
    this.creater = function() {
        athlete.innerText = this.name;
        athleteAge.innerText = this.age;
        athleteGold.innerText = this.golds;
        athleteSport.innerText = this.sport;
        if (this.active) isActive.innerText = 'Still competeing'
        else isActive.innerText = 'Retired'
        cardAthlete.classList.remove('hidden')
    }
}

//adding the 3 athletes. In theory this could be done for all sports.
const athlete29 = new Athlete('Suzanne Schulting', 24, 'Speed skating', true, '2018 and 2022');
const athlete0 = new Athlete('Katie Ledecky', 25, 'Swimming', true,'2012, 2016 and 2020');
const athlete4 = new Athlete('Usain Bolt', 35, 'Track and field', false, '2008, 2012 and 2016');


//Where the welcome message will show
const welcome = document.querySelector('#welcome');

//finds date, then hour. Depending on the hour, a different message will show.
function welcomeUser () {
    const now = new Date();
    const hour = now.getHours();
    if (hour >= 6 && hour < 12) welcome.innerText = 'Good morning!';
    else if (hour >= 12 && hour < 18) welcome.innerText = 'Good afternoon!';
    else if (hour >= 18 && hour < 24) welcome.innerText = 'Good evening!';
    else welcome.innerText = 'Welcome!';
}

//Decides what welcome message to show the user
welcomeUser();


//adding the html elements i need to access for the "find a new sport"
const answer1 = document.querySelector('#answer1');
const answer2 = document.querySelector('#answer2');
const card = document.querySelector('#card-container');
const restart = document.querySelector('#restart');
const yourSport = document.querySelector('#result');
const linkSport = document.querySelector('#link-result');
const newCard = document.querySelector('#sport-result');
const questionHTML = document.querySelector('#question');

const randomSport = document.querySelector('#randomsport');
const displaySports = document.querySelector('#listsports');
const cardOfSports = document.querySelector('#listedsports');
const listCard = document.querySelector('#list');

//used for athletes
const cardAthlete = document.querySelector('#athlete');
const athlete = document.querySelector('#name');
const athleteAge = document.querySelector('#age');
const isActive = document.querySelector('#active');
const athleteSport = document.querySelector('#sport');
const athleteGold = document.querySelector('#gold');



//adding html elements used for the speed skating container and 2 strings used to show the result message. 
var minuteButton = document.querySelector('#minutes');
var message = 'Nils can skate '
var message2 = 'km in '
var resultInHtml = document.querySelector('#nils');

/*when the button saying "enter here" is pressed, a dialog box will appear. If the user eneters does not enter a number between 1 and 1000,
an error message will show and tell requirements. If allowed numbers are entered, the strings above will be used to create (a rounded) result showed under the button. 
*/
minuteButton.onclick = () => {
    const minutes = prompt('Enter minutes here');
    if (isNaN(minutes) || minutes > 1000 || minutes < 1){
        alert('Please enter a number between 1 and 1000')
    } else {
    const km = (minutes * 0.8).toFixed(2)
    resultInHtml.innerHTML = (message.concat('', km, message2, minutes, ' minutes.'));}
}




//eventlisteners for the answers
answer1.addEventListener('click', answeredLeft);
answer2.addEventListener('click', answeredRight);

//This value will let me find out what answeres the user has pressed, and therefore show both the correct next question and result. 
let questionFinder = 0;

/*if answered left:
If the first condition is true, that means there's one or more questions left. (2+4+8=14). If the condition is not met, it means the user answered all questions. Since the 
questionFinder is added in the newQuestion functions im also adding it under "else" so I can find the correct result.
*/
function answeredLeft () {
    if (questionFinder < 15) newQuestionLeft();
    else {
        questionFinder = (questionFinder * 2) + 1;
        showResult(questionFinder);
    }
}

//Same as answeredLeft
function answeredRight () {
    console.log(questionFinder);
    if (questionFinder < 15) newQuestionRight();
    else {
        questionFinder = (questionFinder + 1) * 2;
        showResult(questionFinder);
    }
}

/*If the first condition is met, this means it was not the first question that was answered. That also means I can use the equation to find the correct question. 
When it is the first question I can just declare it 1 or 2, this also makes my equatione work for the rest of the questions. Lastly i send it to the question generating function*/
function newQuestionLeft() {
    if (questionFinder !== 0) questionFinder = (questionFinder * 2) + 1;
    else questionFinder = 1;
    nextQuestion(questionFinder);
}

//Same as answeredLeft
function newQuestionRight() {
    if (questionFinder !== 0) questionFinder = (questionFinder + 1) * 2;
    else questionFinder = 2;
    nextQuestion(questionFinder)
}

//I get the right value in questionFinder, and change the HTML so I get a new question and answers.
function nextQuestion (i) {
    questionHTML.innerText = questions[i].question;
    answer1.innerText = questions[i].answerLeft;
    answer2.innerText = questions[i].answerRight;
}
/*by subtracting 31 from the result I get the correct. There are 31 objects in "questions". If answered all left: questionFinder = 31, all right: = 62
Then I hide the question card, and add the correct result to the result card, and run the function newSport. If the result ends on one of the three sports 
with an athlete, the function showAthlete will be shown
*/
function showResult (i) {
    let result = i - 31;
    card.classList.add('hidden');
    yourSport.innerText = sports[result];
    linkSport.href = links[result];
    console.log(result);
    newSport ();
    if (result === 0 || result === 4 || result === 29) showAthlete(result);
}

//finds out which of the 3 athletes to show
function showAthlete (i) {
    if (i === 29) athlete29.creater();
    if (i === 0) athlete0.creater();
    if (i === 4) athlete4.creater();
    
}

//removes the class that makes the result card hidden
function newSport() {
    newCard.classList.remove('hidden');
}

//starts fuction tryAgain
restart.addEventListener('click', tryAgain)

//reloads the page so the user can try again.
function tryAgain(){
    location.reload();
}

//making a temporary list of the sports that I can add and take sports away from
let removedSports = [...sports];

//adding the list of 10 sports that will be presented to the user.
const ul = document.createElement('ul');
ul.setAttribute('id', 'listed-sports');

//This eventListener will remove the selected items from the displayed list
ul.addEventListener('click', ulClicked);

//creating the 10 <li> that will be inside the ul.
for (i = 1; i < 11; i++) {
    let li = document.createElement('li');
    const randomNumber = Math.floor(Math.random() * (32 - i) + 1);
    li.innerHTML = removedSports[randomNumber];
    removedSports.splice(randomNumber, 1); //removing the sports from the temporary list so that they won't appear in the "add-sport" list
    let buttonX = document.createElement('button');
    buttonX.innerText = 'X';
    li.append(buttonX);

    let buttonStar = createStarButton();
    li.append(buttonStar);

    ul.append(li);
}
listCard.append(ul);

// 1.1           contains all actions made if the ul is clicked.
function ulClicked (e) {
    const target = e.target;
    const parent = target.parentElement;
    if (target.innerText === 'X') removeItem(parent);
    else if (target.innerText === "\u2B50" && !(parent.classList.contains('favourited'))) favouriteItem(parent); // 1.2 
    else if (target.innerText === "\u2B50" && parent.classList.contains('favourited')) unFavouriteItem(parent);//1.2
}

function createStarButton () { //creating a button with a star inside
    let star = document.createElement('button');
    star.setAttribute('id', 'star');
    star.innerText = "\u2B50";
    return star;
}

//removing an item from the sport list
function removeItem (li) {
        if (confirm('Are you sure you want to remove this sport?')) {
            removedSports.push(li.innerText.slice(0, -3));
            li.remove();
        }
}

//1.2   favouriting an selected item in the sport list
function favouriteItem (li) {
    if (confirm('Are you sure you want to favourite this sport?')) {
        li.setAttribute ('class', 'favourited');
        li.remove();
        ul.prepend(li);
    }
}

//1.2   unfavouriting an selected item in the sport list
function unFavouriteItem (li) {
    if (confirm('Are you sure you want to un-favourite this sport?')) {
        li.classList.remove('favourited');
        li.remove();
        ul.append(li);
    }
}

//create the button that will create/show the "add-sport" list.
const addItems = document.createElement('button');
addItems.setAttribute('id', 'add-sports');
addItems.innerText = 'Add sports to the list';
listCard.append(addItems);
addItems.addEventListener('click', addSports); //eventlistener to the button

//creatin the new list from the Sports not shown in the first list.
function addSports() {
    const newSportUl = document.createElement('ul');
    addSportContainer.append(addSportHeader);
    removedSports = removedSports.sort(); //as this list is scrollable i want it alphabetical.
    for (i = 0; i < removedSports.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = removedSports[i];
        let button = document.createElement('button');
        button.innerText = '+';
        li.append(button);
        newSportUl.append(li);
    }
    addSportContainer.append(newSportUl);
}

//creating a <div> for the new list, and adding it to the card
const addSportContainer = document.createElement('div');
addSportContainer.setAttribute('id', 'add-sports-container');
listCard.append(addSportContainer);

//adding header to the new list, and a button to close the "add sport" list
const addSportHeader = document.createElement('h2');
addSportHeader.innerText = 'Add your sport';
addSportHeader.append(document.createElement('button'));
addSportHeader.children[0].innerHTML = "X";

addSportHeader.children[0].addEventListener('click', closeAddSport); //Eventlistener to the button

//this function will close the list
function closeAddSport() {
    addSportContainer.innerHTML = ''; 
}

//eventlistener inside the new "add-sport" list
addSportContainer.addEventListener('click', applySport);

// 2.1         again, if the parent is <li> the function can continue. Change the button from + to X, and move the <li> to the first list.
function applySport(e) {
    const target = e.target;
    const parent = target.parentElement;
    if (parent.nodeName === 'LI') {
        if (confirm('Are you sure you want to add this sport?')) {
            parent.children[0].innerHTML = "x";
            parent.remove();
            let star = createStarButton();
            parent.append(star);

            ul.append(parent);
        }
    }
}

