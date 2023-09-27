/////////////////////////////////////////////////////////////////////offcanves
let btn = document.querySelector("button");
let offcanves = document.querySelector(".offcanves");
let btnclose = document.querySelector(".offcanves_header button");
btn.addEventListener("click", () => {
  offcanves.style.left = "0%";
});
btnclose.addEventListener("click", () => {
  //   console.log("oo");
  offcanves.style.left = "-100%";
});
