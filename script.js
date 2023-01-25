const  menuBtn = document.querySelector(".menu-btn");
const  navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click",() => {
    menuBtn.classList.toggle("active");
    navMenu.classList.toggle("active");

})

document.querySelectorAll('nav-a').forEach(n => n.
    addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navMenu.classList.remove("active")
}
    
    ));
