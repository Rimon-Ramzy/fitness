// import Swiper from 'swiper';

let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: "auto",
  spaceBetween: 15,
  navigation: {
  },
  breakpoints: {
    1024: {
      slidesPerView: 3.7,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    }
  },
});


let bars = document.getElementById("bars");
let navbar = document.getElementById("navbar");
let navbarLi = document.querySelectorAll("#navbar li");
bars.addEventListener("click", () => {
  if (!navbar.classList.contains("mobile")) {
    navbar.style.position = "absolute"
    navbar.style.display = "flex"
    navbar.style.top = "100%"
    navbar.style.right = "0"
    navbar.style.flexDirection = "column"
    navbar.style.zIndex = "12"
    navbar.style.backgroundColor = "#ccc"
    navbar.style.width = "100%"
    navbar.style.color = "#000"
    navbar.style.padding = "10px 20px"
    navbarLi.forEach((el) => {
      el.style.fontSize = "13px"
      el.style.fontWeight = "600"
      el.style.paddingBlock = "10px"
    })
    navbar.classList.add("mobile")
  } else {
    navbar.style.display = "none"
    navbar.classList.remove("mobile")
  }

})

let backToTopDiv = document.querySelector(".back-top");
let backToTop = document.getElementById("backToTop");
console.log(scrollY);
console.log(innerHeight);
if (scrollY > innerHeight) {
  backToTopDiv.style.display = "flex"
}
backToTop.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  })
})


let drakLight = document.getElementById("drakLight");
let body = document.querySelector("body");
drakLight.addEventListener("click", () => {
  if (!body.classList.contains("dark")) {
    body.classList.add("dark")
  } else {
    body.classList.remove("dark")
  }
})