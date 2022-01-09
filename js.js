fetch("data.json")
  .then((response) => response.json())
  .then((data) => info.push(...data));

let info = [];
let n = 0;
let cards = document.querySelectorAll(".card");
let timeframes = document.querySelectorAll(".info__time-option");
let prop = "weekly";
let cachedTf = document.querySelectorAll(".info__time-option")[0];

function changeCards(val) {
  prop = val;
  view();
}

timeframes.forEach((item) => {
  item.addEventListener("click", activeTf);
});

function activeTf() {
  if (this.innerText.toLowerCase() === prop) {
    this.classList.add("active");
  }
  if (!cachedTf) {
    cachedTf = this;
  }

  if (this != cachedTf) {
    cachedTf.classList.remove("active");
  }
  cachedTf = this;
}

function view() {
  if (!info) return;
  cards.forEach((card) => {
    card.querySelector(".card__current-time").classList.add("animation");
    card.querySelector(".card__previous-time").classList.add("animation");

    setTimeout(function () {
      card.querySelector(".card__title").innerHTML = info[n].title;
      card.querySelector(".card__current-time").innerHTML =
        info[n].timeframes[prop].current + "hrs";
      card.querySelector(".card__previous-time").innerHTML =
        "Last week - " + info[n].timeframes[prop].previous + "hrs";
      card.querySelector(".card__current-time").classList.remove("animation");
      card.querySelector(".card__previous-time").classList.remove("animation");
      n++;
    }, 500);
  });
  if (n == 6) n = 0;
}

window.onload = function () {
  //view();
};
