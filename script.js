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
const rootElement = document.querySelector("html");

function showIconMusic() {
  tombolIcon.style.visibility = "visible";
}

// disable scroll when reload
function disableScroll() {
  scrollTop = window.scrollY || document.documentElement.scrollTop;
  scrollLeft = window.scrollX || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  };
  rootElement.style.scrollBehavior = "auto";
}

function enableScroll() {
  window.onscroll = function () {};
  rootElement.style.scrollBehavior = "smooth";
}

disableScroll();

// header button
bukaUndangan.addEventListener("click", () => {
  openFullscreen();
  mySong.play();
  showIconMusic();
  enableScroll();
});

function openFullscreen() {
  const elem = document.documentElement; // fullscreens the whole page

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    // Safari
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    // IE/Edge
    elem.msRequestFullscreen();
  }
}

// change icon play/pause
tombolIcon.addEventListener("click", () => {
  if (mySong.paused) {
    mySong.play();
    logoIcon.classList.add("button_icon_c");
    logoIcon.classList.remove("button_icon_d");
  } else {
    mySong.pause();
    logoIcon.classList.remove("button_icon_c");
    logoIcon.classList.add("button_icon_d");
  }
});

// animation on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("animate", entry.isIntersecting);
  });
});
const hiddenElements = document.querySelectorAll(".anim");

hiddenElements.forEach((e) => observer.observe(e));
