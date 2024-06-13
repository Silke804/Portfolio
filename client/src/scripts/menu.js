const hamburger = document.querySelector(".hamburger-bar");
const navContainer = document.querySelector(".hamburger-container");


hamburger.addEventListener("click", () => {
    navContainer.classList.toggle("active");
});