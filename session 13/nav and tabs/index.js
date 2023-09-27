// //////////////////////////////////////////////////////////////////////////nav and tabs
let tabs = document.querySelectorAll(".taps li");
let contents = document.querySelectorAll(".content div");
tabs.forEach((tab, index) =>
  tab.addEventListener("click", () => {
    let tabIndex = index;
    deactive();
    tab.classList.add("active");
    contents.forEach((content, index) => {
      if (tabIndex == index) {
        hiddin();
        content.classList.add("show");
      }
    });
  })
);
function deactive() {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
}
function hiddin() {
  contents.forEach((content) => {
    content.classList.remove("show");
  });
}
