import './hoisted.DYC5A6DV.js';

const numberOfStars = 100;
for (let i = 0; i < numberOfStars; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.top = Math.random() * 100 + "vh";
  star.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(star);
}
