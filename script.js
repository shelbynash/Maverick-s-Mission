/* Nav Bar Hamburger Button*/
const hamburgerButton = document.querySelector(".hamburger-button");

function openMobileNav() {
  const topNav = document.getElementById("myTopnav");
  if (!topNav.classList.contains("responsive")) {
    topNav.classList.add("responsive");
  } else if (topNav.classList.contains("responsive")) {
    topNav.classList.remove("responsive");
  }
}
hamburgerButton.addEventListener("click", openMobileNav);