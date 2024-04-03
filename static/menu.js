
let isOpen = false;
let mobileMenu = document.getElementById("mobileNav");

function toggleMenu() {
    isOpen = !isOpen;
    if (isOpen) {
        mobileMenu.style.top = "0";
    }
    else {
        mobileMenu.style.top = "-87px"
    }
}