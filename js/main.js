// Import game data
import { weapons } from './weapons.js';
import { monsters } from './monsters.js';
import { potions } from './potions.js';

// Game state variables
let xp = 0;
let health = 100;
let mana = 20;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

// DOM element selections
// Buttons
const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");

// Chat elements
const chatInput = document.querySelector('#chat-input');
const chatSend = document.querySelector('#chat-send');
const chatWindow = document.querySelector('#chat-window');

// Text and stat display elements
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const manaText = document.querySelector("#manaText")
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

// Game locations and their associated data
const locations = [
    {
      name: "town square",
      "button text": ["Go to store", "Go to cave", "Fight monster"],
      "button functions": [goStore, goCave, fightMonster],
      text: "You are in the town square. You see a sign that says \"Store\"."
    },
    {
      name: "store",
      "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
      "button functions": [buyHealth, buyWeapon, goTown],
      text: "You enter the store."
    },
    {
      name: "cave",
      "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
      "button functions": [fightSlime, fightBeast, goTown],
      text: "You enter the cave. You see some monsters."
    },
    {
      name: "fight",
      "button text": ["Attack", "Dodge", "Run"],
      "button functions": [attack, dodge, goTown],
      text: "You are fighting a monster."
    },
    {
      name: "kill monster",
      "button text": ["Go to town square", "Go to town square", "Go to town square"],
      "button functions": [goTown, goTown, goTown],
      text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
    },
    {
      name: "lose",
      "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
      "button functions": [restart, restart, restart],
      text: "You die. ☠️"
    },
    { 
      name: "win", 
      "button text": ["REPLAY?", "REPLAY?", "REPLAY?"], 
      "button functions": [restart, restart, restart], 
      text: "You defeat the monster! YOU WIN THE GAME! 🎉" 
    }
  ];

// Initialize button click handlers
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightMonster;
button4.onclick = openSettings;

// Core game functions
function update(location) {
  monsterStats.style.display = "none";
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerText = location.text;
}

function goTown() {
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
}

function goCave() {
  update(locations[2]);
  console.log("Going to cave.");
}

// Combat functions
function fightMonster() {
  console.log("Fighting monster.");
}

function attack() {
  // Implementation needed
}

function dodge() {
  // Implementation needed
}

// Shopping functions
function buyHealth() {
  // Implementation needed
}

function buyMana() {
  // Implementation needed
}

function buyWeapon() {
  // Implementation needed
}

// Monster-specific fight functions
function fightSlime() {
  // Implementation needed
}

function fightBeast() {
  // Implementation needed
}

// Game state functions
function defeatMonster() {
  // Implementation needed
}

function lose() {
  // Implementation needed
}

function winGame() {
  // Implementation needed
}

function restart() {
  // Implementation needed
}

// UI functions
function openSettings() {
  // Implementation needed
}

function openInventory() {
  // Implementation needed
}