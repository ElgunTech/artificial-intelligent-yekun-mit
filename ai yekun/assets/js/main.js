
const hamburgerMenu = document.querySelector(".fa-bars")
hamburgerMenu.addEventListener("click", function () {
  document.querySelector(".mobile-menu").classList.add("aktiv")
})

const iconXmark = document.querySelector(".fa-xmark")
iconXmark.addEventListener("click", function () {
  document.querySelector(".mobile-menu").classList.remove("aktiv")
})

const watch = document.getElementsByClassName("watch")[0]
watch.addEventListener("click", () => {
  document.getElementById("watch-modal").classList.add("aktiv")
})
document.querySelector(".fa-circle-xmark").addEventListener("click", function () {

  document.getElementById("watch-modal").classList.remove("aktiv")
})
const swiper = new Swiper(".companies", {
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});


const awardSwiper = new Swiper(".awardSlayder", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});


const awardsDiv = document.getElementsByClassName("awardDiv")[0]
window.addEventListener("DOMContentLoaded", getMelumatGetir)
async function getMelumatGetir(){
  const unvan = "assets/information.json"
  try{
    const cavab = await fetch(unvan)
    const melumatlar = await cavab.json()
   for(let i=0; i<melumatlar.length; i++) {
    awardsDiv.innerHTML += `<div class="swiper-slide">
 <div class="award p-3 text-white">
 <img src="${melumatlar[i].card_photo}" alt="" class="">
 <h3 class="text-center my-4">${melumatlar[i].card_name}</h3>
 <p>${melumatlar[i].card_main}</p>
 </div>
 </div>`
   }
  }
 catch(err){
  console.log(`Serverde Xeta Yarandi: ${err.message}`)
 }
}