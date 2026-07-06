const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});


const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
    themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
} else {
    themeToggle.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
}

});