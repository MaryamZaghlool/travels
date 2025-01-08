let imgSlide = document.getElementsByClassName("Himgslide");
let slideImage = document.getElementsByClassName("Hslides");
let hSlide = document.getElementsByClassName("hSlide");
let HfirstSlide = 1;
function Hslides(n) {
    if (n > imgSlide.length) {
        n = 1;
    }
    else if (n < 1) {
        n = imgSlide.length;
    }
    for (let i = 0; i < imgSlide.length; i++) {
        slideImage[i].style.display = "none";
    }
    for (let i = 0; i < hSlide.length; i++) {
        hSlide[i].classList.remove("activeslide");
    }
    slideImage[n - 1].style.display = "block";
    hSlide[n - 1].classList.add("activeslide");
    HfirstSlide = n;
}
for (let i = 0; i < hSlide.length; i++) {
    hSlide[i].onclick = () => {
        let x = parseInt(hSlide[i].getAttribute("data-index"));
        Hslides(x);
    }
}
Hslides(HfirstSlide);
let HslidesWithArrows = (x) => {
    Hslides(HfirstSlide - x);
}
let tab = document.querySelectorAll(".tabList li");
let tabImage = document.getElementsByClassName("tabImages");
for (let i = 0; i < tab.length; i++) {
    tab[i].onclick = function () {
        for (let j = 0; j < tab.length; j++) {
            tab[j].classList.remove("tab");
            tabImage[j].style.display = "none";
        }
        this.classList.add("tab");
        tabImage[i].style.display = "block";
    }
}
let contact = document.getElementsByClassName("contacts")[0];
let trips = document.getElementsByClassName("travels")[0];
let scrollTrips = document.getElementById("trips");
trips.onclick = function scrollToSection1() {
    scrollTrips.scrollIntoView({ behavior: 'smooth' });
}
let scrollContact = document.getElementById("content");
contact.onclick = function scrollToSection2() {
    scrollContact.scrollIntoView({ behavior: 'smooth' });
}
