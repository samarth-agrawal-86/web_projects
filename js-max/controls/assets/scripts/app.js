const PLAYER_ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;
const MODE_ATTACK = 'ATTACK'; // MODE_ATTACK = 0
const MODE_STRONG_ATTACK = 'STRONG_ATTACK'; // MODE_STRONG_ATTACK = 1

let battleLog = [];

function getMaxLifeValues() {
  let enteredValue = prompt('Maximum life for the game', '100');
  let parsedValue = parseInt(enteredValue);

  if (isNaN(parsedValue) || parsedValue <= 0) {
    // chosenMaxLife = 100;
    throw { message: 'Invalid user input' };
  }
  return parsedValue;
}
let chosenMaxLife;
try {
  chosenMaxLife = getMaxLifeValues();
} catch (error) {
  console.log(error);
  chosenMaxLife = 100;
}

let currentPlayerHealth = chosenMaxLife;
let currentMonsterHealth = chosenMaxLife;
let hasBonusLife = true;
adjustHealthBars(chosenMaxLife);

function reset() {
  resetGame(chosenMaxLife);
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
}
function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth = currentPlayerHealth - playerDamage;

  if (currentPlayerHealth <= 0 && hasBonusLife == true) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert('You would be dead but bonus life saved you!');
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You Won!');
    reset();
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You Lost');
    reset();
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert('You have a draw!');
    reset();
  }
}

function attackMonster(mode) {
  let maxDamage;
  if (mode === MODE_ATTACK) {
    maxDamage = PLAYER_ATTACK_VALUE;
  } else if (mode === MODE_STRONG_ATTACK) {
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const monsterDamage = dealMonsterDamage(maxDamage);
  currentMonsterHealth = currentMonsterHealth - monsterDamage;

  endRound();
}

function attackHandler() {
  attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
  attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {
  let healValue;
  if (currentPlayerHealth + HEAL_VALUE > chosenMaxLife) {
    healValue = chosenMaxLife - currentPlayerHealth;
  } else healValue = HEAL_VALUE;
  increasePlayerHealth(healValue);
  currentPlayerHealth = currentPlayerHealth + healValue;
  endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);

/*
battleLog = [
  { target: 'Monster', event: 'Attack', monsterHealth: 80, playerHealth: 82 },
  { target: 'Player', event: 'Attack', monsterHealth: 80, playerHealth: 76 },
];

for (let i = 0; i < battleLog.length; i++) {
  const element = battleLog[i];
  console.log(element);
}

for (const logEntry of battleLog) {
  console.log(logEntry);
}

for (const logEntry of battleLog) {
  console.log(logEntry);
  for (const key in logEntry) {
    console.log(key);
    // dot notation won't work because js will try to find a property named key in that object
    console.log(logEntry.key);
    // value of the key constant is the name of the property of object
    // so, we have to use square bracket notation
    console.log(logEntry[key]);
  }
}
*/
