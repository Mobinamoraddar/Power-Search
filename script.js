"use strict";
// GOOGLE APPS POP UP MENU
const googleApps = document.querySelector(".g-apps");
const popUpMenu = document.querySelector(".drop-menu-g-apps");

googleApps.addEventListener("click", showMenu);
function showMenu() {
  popUpMenu.style.display = "initial";
}

window.addEventListener("click", function (event) {
  //   console.log(event);
  if (event.target != popUpMenu && event.target != googleApps) {
    popUpMenu.style.display = "none";
  }
});
