let damage = parseInt(localStorage.getItem("dmgdealt")) || 0; // use locally stored number or start count at zero
setInterval(function () {
  damage = damage + 1;
  console.log("💥", damage);
  damUpdate();
}, 1000); // intervals count in ms

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

// Reset stats
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
