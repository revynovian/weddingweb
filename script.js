// nama tamu
const params = new URLSearchParams(document.location.search);
  let tamu = params.get("yth");
  if (tamu) {
    // console.log(tamu)
    document.getElementById("nama-tamu").innerHTML = tamu;
}

// setting button dan scroll
const mySong = document.getElementById("mySong");
const bukaUndangan = document.getElementById("button_open");
const tombolIcon = document.getElementById("button_music");
const logoIcon = document.getElementById("icon_music");
const rootElement = document.querySelector("html")

function showIconMusic() {
  tombolIcon.style.visibility = "visible";
}

// disable scroll when reload
function disableScroll() {
  scrollTop = window.scrollY || document.documentElement.scrollTop;
  scrollLeft = window.scrollX || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  }
  rootElement.style.scrollBehavior = 'auto';
}

function enableScroll() {
  window.onscroll = function (){}
  rootElement.style.scrollBehavior = 'smooth'
}

disableScroll()


// header button
bukaUndangan.addEventListener("click", () => {
  mySong.play();
  showIconMusic();
  enableScroll();
})


// change icon play/pause
tombolIcon.addEventListener("click", () => {
  if(mySong.paused) {
    mySong.play();
    logoIcon.classList.add("button_icon_c");
    logoIcon.classList.remove("button_icon_d");
  }else {
    mySong.pause();
    logoIcon.classList.remove("button_icon_c");
    logoIcon.classList.add("button_icon_d");
  }
})     

// animation on scroll
const observer = new IntersectionObserver((entries)=> {
  entries.forEach((entry) => {
    entry.target.classList.toggle('animate', entry.isIntersecting);
  })
})
const hiddenElements = document.querySelectorAll('.anim');

hiddenElements.forEach((e)=> observer.observe(e))

// swiper section
const buttons = document.querySelectorAll("[data-swiper-button");

buttons.forEach(button => {
  button.addEventListener("click", ()=> {
    const offset = button.dataset.swiperButton === 'next' ? 1 : -1;
    const slides = button.closest("[data-swiper]").querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]");
    let slideNewIndex = [...slides.children].indexOf(activeSlide) + offset;

    if(slideNewIndex <0 ) slideNewIndex = slides.children.length -1;
    if (slideNewIndex >= slides.children.length) slideNewIndex = 0;

    slides.children[slideNewIndex].dataset.active = true;
    delete activeSlide.dataset.active

  })
})

setInterval(function(){
  const slides = document.querySelector("[data-slides]")
  const activeSlide = slides.querySelector("[data-active]");
  let slideIndex = [...slides.children].indexOf(activeSlide)+1;

  if(slideIndex <0 ) slideIndex = slides.children.length -1;
  if (slideIndex >= slides.children.length) slideIndex = 0;

  slides.children[slideIndex].dataset.active = true;
  slideIndex++
  delete activeSlide.dataset.active
}, 5000)