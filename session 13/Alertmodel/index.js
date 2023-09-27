// ///////////////////////////////////////////////////////////////////Alert Module
let btn = document.querySelector("button");
let text = document.querySelector(".text");
let btnclose = document.querySelector(".text_header button");
btn.addEventListener("click", (s) => {
  //   console.log();
  text.style.right = "0%";
});
btnclose.addEventListener("click", () => {
  text.style.right = "-100%";
});
