let damage = 0; // start count at zero
setInterval(function () {
  damage = damage + 1;
  console.log("💥", damage);
  damUpdate();
}, 1000); // intervals count in ms

function clickHit() {
  damage++;
  console.log("🗡️", damage);
  damUpdate();
  soundPlay();
}

const clickAttack = document.querySelector(".bigDragon");
clickAttack.addEventListener("click", clickHit);

function damUpdate() {
  const damDis = document.querySelector("#damDis");
  damDis.textContent = damage + " DMG";
}

// HURT SOUND EFFECT
function soundPlay() {
  var audio = new Audio("./hurtsfx.wav");
  audio.volume = 0.6;
  audio.play();
}
