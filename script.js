// JavaScript code to handle smooth scrolling and arrow direction change

const scrollBtn = document.getElementById("scrollButton");
const sections = ["header", "about", "projects", "certifications", "contact"];
let currentIndex = 0;

function updateCurrentIndex() {
  let currentScrollPos = window.scrollY + 100;
  for (let i = 0; i < sections.length; i++) {
    const section = document.getElementById(sections[i]);
    if (section && section.offsetTop <= currentScrollPos) {
      currentIndex = i;
    }
  }
}

function scrollToSection(index) {
  const section = document.getElementById(sections[index]);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  }
}

function updateArrowDirection() {
  updateCurrentIndex();
  if (currentIndex < sections.length - 1) {
    scrollBtn.classList.remove("up");
    scrollBtn.classList.add("down");
    scrollBtn.innerHTML = '<i class="fas fa-chevron-down"></i>';
  } else {
    scrollBtn.classList.remove("down");
    scrollBtn.classList.add("up");
    scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
  }
}

scrollBtn.addEventListener("click", () => {
  if (scrollBtn.classList.contains("down")) {
    if (currentIndex < sections.length - 1) {
      scrollToSection(currentIndex + 1);
    } else {
      scrollToSection(0);
    }
  } else {
    scrollToSection(0);
  }
  setTimeout(updateArrowDirection, 100);
});

window.addEventListener("scroll", updateArrowDirection);
window.addEventListener("load", updateArrowDirection);

// JavaScript code to handle background music playback

const audio = document.getElementById("audio");
const playButton = document.querySelector(".btn-play-music");
const musicBox = document.querySelector(".music-box");
const icon = playButton.querySelector(".fa");
let isPlaying = false;

function startMusic() {
  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise
      .then(function () {
        isPlaying = true;
        updateUI();
      })
      .catch(function (error) {
        isPlaying = false;
        updateUI();

        document.addEventListener(
          "click",
          function startOnClick() {
            audio.play();
            document.removeEventListener("click", startOnClick);
          },
          { once: true }
        );
      });
  }
}

function updateUI() {
  if (isPlaying) {
    playButton.classList.remove("play");
    musicBox.classList.remove("paused");
    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");
  } else {
    playButton.classList.add("play");
    musicBox.classList.add("paused");
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
  }
}

playButton.addEventListener("click", function () {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
});

audio.addEventListener("playing", function () {
  isPlaying = true;
  updateUI();
});

audio.addEventListener("pause", function () {
  isPlaying = false;
  updateUI();
});

window.addEventListener("load", function () {
  startMusic();
});

document.addEventListener("DOMContentLoaded", function () {
  startMusic();
});

// JavaScript code to handle about section tab navigation

var tabnames = document.getElementsByClassName("tab-name");
var tabcontents = document.getElementsByClassName("tab-contents");
var tabname;
var tabcontent;

function openTab(tablink) {
  for (tabname of tabnames) {
    tabname.classList.remove("active-name");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-name");
  document.getElementById(tablink).classList.add("active-tab");
}

// JavaScript code to handle logo carousel

// window.addEventListener("DOMContentLoaded", () => {
//   const track = document.getElementById("logoTrack1");
//   const cards = [...track.children];

//   if (!track.classList.contains("cloned")) {
//     cards.forEach((card) => {
//       const clone = card.cloneNode(true);
//       track.appendChild(clone);
//     });
//     track.classList.add("cloned");
//   }
// });

// window.addEventListener("DOMContentLoaded", () => {
//   const track = document.getElementById("logoTrack2");
//   const cards = [...track.children];

//   if (!track.classList.contains("cloned")) {
//     cards.forEach((card) => {
//       const clone = card.cloneNode(true);
//       track.appendChild(clone);
//     });
//     track.classList.add("cloned");
//   }
// });
