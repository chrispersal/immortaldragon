let damage = parseInt(localStorage.getItem("dmgdealt")) || 0; // use locally stored number or start count at zero
setInterval(function () {
  damage = damage + 1;
  console.log("💥", damage); // discrete symbols for click damage vs. auto damage
  damUpdate();
}, 1000); // intervals count in ms

// CLICK ATTACK
function clickHit() {
  damage++;
  console.log("🗡️", damage);
  damUpdate();
  soundPlay(); // play hurt sound on click
}

const clickAttack = document.querySelector(".bigDragon");
clickAttack.addEventListener("click", clickHit);

function damUpdate() {
  const damDis = document.querySelector("#damDis");
  damDis.textContent = damage + " DMG";
  localStorage.setItem("dmgdealt", damage); // adds damage amount to storage as dmgdealt
}

// HURT SOUND EFFECT
function soundPlay() {
  var audio = new Audio("./hurtsfx.wav");
  audio.volume = 0.6;
  audio.play();
}

// RESET COUNT
function resetDMG() {
  damage = 0;
  damUpdate(); // Clear damage amount local storage
  localStorage.removeItem("dmgdealt");
}
const resetstats = document.querySelector(".resetstats");
resetstats.addEventListener("click", resetDMG);

// API call for upgrade list
fetch("https://cookie-upgrade-api.vercel.app/api/upgrades")
  .then(function (response) {
    return response.json();
  })
  .then(function (upgrades) {
    console.log(upgrades);
  });
function displayUpgrades(upgrades) {}

let upg1 = document.getElementById("upg1");
buy1.addEventListener("click", upg1);

// TO DO:
// Pull values from the API and connect to the buttons so clicking purchases one of the upgrade in question, deducts from total damage pool and adds the extra amount to the DPS
// Change name for each upgrade from the cookie-themed name to something more appropriate (using DOM Manipulation?)
// Display the cost and amount of each upgrade item in the button text
// Add a DPS display that shows the DPS, affected by any upgrades
// Make the reset button also wipe any purchased upgrades
