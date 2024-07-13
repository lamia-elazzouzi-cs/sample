const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];
let cards = shuffle(colors.concat(colors));
let selectedCards = [];
let score = 0;
let timeLeft = 30;
let gameInterval;

const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');


// dynamically creating the card elements based on the colors in cards[]
function generateCards() {
    for (const color of cards) {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add('card');
        cardDiv.dataset.color = color;
        cardDiv.textContent = '?';
        gameContainer.appendChild(cardDiv);
    }
}

// shuffles the lements in array in random order
function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {
        // j is a randomly generated index within the array
        const j = Math.floor(Math.random() * (i + 1));
        // using array destructuring assignement, swap element in the i and j
        // indices without the use of temp variable
        console.log(`before: array[${i}] = ${array[i]}`);
        [array[i], array[j]] = [array[j], array[i]];
        console.log(`after: array[${i}] = ${array[i]}`);
    }

    return array;
}


// manages what happens when a user clicks on a card
function handleCardClick(event) {

    const card = event.target; // retrieves the element that triggered the event ie the card that was clicked
    // check if the clicked element is a card or if it's already matched
    if (!card.classList.contains('card') || card.classList.contains('matched')) {
        return; // ignore any further actions for this particular click
    }
    // reveal the card's color by changing its text from '?' to its color
    card.textContent = card.dataset.color;
    // match the card's background with its revealed color
    card.style.backgroundColor = card.dataset.color;
    // save the clicked card
    selectedCards.push(card);

    // apply check every time 2 cards are selected
    if (selectedCards.length == 2) {
        // if the player selected 2 cards, we set timeout to 500ms
        // allow player to briefly view both cards before executing checkMatch()
        setTimeout(checkMatch, 500);
    }
}

// evaluate if 2 selected cards are a match
function checkMatch() {
    // destructuring selectedCards[] into 2 variables
    const [card1, card2] = selectedCards;
    // comparing selected cards' colors
    if (card1.dataset.color === card2.dataset.color) {
        // the colored cards are a match
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 2;
        scoreElement.textContent = `Score: ${score}`;
    } else {
        // played picked cards that don't match
        card1.textContent = '?';
        card2.textContent = '?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }
    // resetting the selection
    selectedCards = [];
}


// initialize and start the game
function startGame() {
    // setting the initial game state
    let timeLeft = 40;
    startbtn.disabled = true; // prevent multiple game initializations
    score = 0; // reset the score to 0
    scoreElement.textContent = `Score: ${score}`;
    startGameTimer(timeLeft);

    cards = shuffle(colors.concat(colors)); // shuffle and duplicate game cards

    selectedCards = [];
    gameContainer.innerHTML = '';

    generateCards(); // create a fresh game layout
    gameContainer.addEventListener('click', handleCardClick); // enable card clicks


}


// manage the game timer and time display
function startGameTimer(timeLeft) {

    // set the initial display of the timer
    timerElement.textContent = `Time left: ${timeLeft}`;

    // initiate the interval to trigger a fct every 1 second
    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time left: ${timeLeft}`;

        if (timeLeft === 0) {
            clearInterval(gameInterval);
            let timeLeft = 30;
            alert("Game over!");
            startbtn.disabled = true;
        }
    }, 1000);
}

startbtn.addEventListener('click', startGame);