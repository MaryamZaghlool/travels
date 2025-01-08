let list = document.getElementsByClassName("items");
document.getElementsByClassName("humbg")[0].onclick = function () {
  document.getElementById("comp").classList.toggle("collap");
};
document.getElementsByClassName("arrow")[0].onclick = function () {
  document.getElementsByClassName("list")[0].classList.toggle("viewing");
};
let local = Number(localStorage.getItem("ele")) - 1;
if (local != null) {
  for (let i = 0; i < list.length; i++) {
    if (local === i) {
      list[i].classList.add("select");
      document.getElementById("img").src = list[i].children[0].src;
    }
    else {
      list[i].classList.remove("select");
    }
  }
}
let up = document.getElementsByClassName("up")[0];
window.addEventListener("scroll", () => {
  if (document.body.scrollTop >= 250 || document.documentElement.scrollTop >= 250) {
    up.classList.remove("hide");
  } else {
    up.classList.add("hide");
  }
})
up.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function select() {
  for (let i = 0; i < list.length; i++) {
    list[i].onclick = function () {
      for (let j = 0; j < list.length; j++) {
        list[j].classList.remove("select");
      }
      this.classList.add("select");
      window.localStorage.setItem("ele", this.getAttribute("data-index"))
      document.getElementById("img").src = this.children[0].src;
      document.getElementsByClassName("list")[0].classList.toggle("viewing");
    };
  }
}
select();

let img1 = document.getElementsByClassName("imgslide");
let img2 = document.getElementsByClassName("img2");
let firstSlide = 1;
function slides(n) {
  if (n > img1.length) {
    n = 1;
  }
  else if (n < 1) {
    n = img1.length;
  }
  for (let i = 0; i < img1.length; i++) {
    img1[i].style.display = "none";
  }
  for (let i = 0; i < img2.length; i++) {
    img2[i].classList.remove("hover");
  }
  img1[n - 1].style.display = "block";
  img2[n - 1].classList.add("hover");
  firstSlide = n;
}
slides(firstSlide);
for (let i = 0; i < img2.length; i++) {
  img2[i].onclick = () => {
    let x = parseInt(img2[i].getAttribute("data-index"));
    slides(x);
  }
}
let slidesWithArrows = (x) => {
  slides(firstSlide - x);
}
