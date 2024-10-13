// main.js
import { weapons } from './weapons.js';
import { monsters } from './monsters.js';
import { potions } from './potions.js';

let xp = 0;
let health = 100;
let mana = 20;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const manaText = document.querySelector("#manaText")
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight monster"],
    "button functions": [goStore, goCave, fightMonster],
    text: "You are in the town square. You see a sign that says \"Store\"."
  },
  // ... rest of the locations ...
];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightMonster;
button4.onclick = openSettings;
button5.onclick = openInventory;

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

function fightMonster() {
  console.log("Fighting monster.");
}

function buyHealth() {
}

function buyMana() {
}

function buyWeapon() {
}

function fightSlime() {
}

function fightBeast() {
}

function attack() {
}

function dodge() {
}

function defeatMonster() {
}

function lose() {
}

function winGame() {
}

function restart() {
}

function openSettings() {
}

function openInventory() {
}