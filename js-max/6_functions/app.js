const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
  console.log('Starting game...');
}

const person = {
  name: 'Sam',
  greet: function greet() {
    console.log('Hello There!');
  },
};
// name is a property
// greet is a method

//person.greet();
startGameBtn.addEventListener('click', startGame);

console.log('console.log(startGame)');
console.log(startGame);
// function

console.log('console.log(typeof startGame)');
console.log(typeof startGame);
// function

console.log('console.dir(startGame)');
console.dir(startGame);

function startGame() {
  console.log('Starting game...');
}
