const navOpen = document.querySelector(".menu");
const navClose = document.querySelector(".close-menu");
const navList = document.querySelector("ul");

navOpen.addEventListener("click", function() {
    navOpen.style.display = "none";
    navClose.style.display = "block";
    navList.style.left = "70%"
})
navClose.addEventListener("click", function() {
    navOpen.style.display = "block";
    navClose.style.display = "none";
    navList.style.left = "-70%"
})