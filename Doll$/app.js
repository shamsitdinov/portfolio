const text = document.querySelector("h2");
const title = document.querySelector("input");

title.addEventListener("keyup", () => {
  title.style.width = 100;
  let som = title.value;
  let doll = som * 12.7;
  text.innerHTML = `${som}$ ${doll.toFixed(0)} ming so'm`;
});