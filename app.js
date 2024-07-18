let damage = 0; // start count at zero
setInterval(function () {
  damage = damage + 1;
  console.log("🗡️", damage);
  damUpdate();
}, 1000); // intervals count in ms

const clickCount = document.getElementById("bigDragon");

clickCount.addEventListener("click", clickAttack);

function damUpdate() {
  const damDis = document.querySelector("#damDis");
  damDis.textContent = damage + " DMG";
}
