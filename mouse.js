const container = document.querySelector(".container");
const button = document.querySelector(".button");
const X = document.querySelector(".X span");
const Y = document.querySelector(".Y span");

button.addEventListener(
  "click",
  () => {
    button.classList.toggle("active");
    console.log("button was Clicked");
  },
  false
);

const mousePosition = (event) => {
  X.innerHTML = event.pageX;
  Y.innerHTML = event.pageY;
};

window.addEventListener("mousemove", mousePosition, false);

container.addEventListener(
  "mouseenter",
  () => {
    container.classList.add("red");
  },
  false
);

container.addEventListener(
  "mouseleave",
  () => {
    container.classList.remove("red");
  },
  false
);
