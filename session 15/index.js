// function getbusiness(callback) {
// let myhtp = new XMLHttpRequest();
// myhtp.open(
// "GET",
// `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2573d1ae4a0043dca6ca622f4d0e6fe9
// `
// );
// myhtp.send();
// let postContainer;
// myhtp.onreadystatechange = () => {
// if (myhtp.readyState == 4) {
// postContainer = JSON.parse(myhtp.response).articles;
// console.log("business", postContainer);
// displayPosts();
// }
// };
// }
// function getSports(callback) {
// let myhtp = new XMLHttpRequest();
// myhtp.open(
// "GET",
// `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=2573d1ae4a0043dca6ca622f4d0e6fe9
// `
// );
// myhtp.send();
// let postContainer;
// myhtp.onreadystatechange = () => {
// if (myhtp.readyState == 4) {
// postContainer = JSON.parse(myhtp.response).articles;
// console.log("sports", postContainer);
// callback();
// displayPosts();
// }
// };
// }
// function getGeneral(callback) {
// let myhtp = new XMLHttpRequest();
// myhtp.open(
// "GET",
// `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=2573d1ae4a0043dca6ca622f4d0e6fe9
// `
// );
// myhtp.send();
// let postContainer;
// myhtp.onreadystatechange = () => {
// if (myhtp.readyState == 4) {
// postContainer = JSON.parse(myhtp.response).articles;
// console.log("general", postContainer);
// displayPosts();
// callback();
// }
// };
// }
// function ApiDone() {
// console.log("Done");
// }
// getSports(() => {
// getGeneral(() => {
// getbusiness(ApiDone);
// });
// });
// getGeneral();
// getbusiness();
// apiDone();
//
// function displayPosts() {
//   let text = "";
//   postContainer.forEach((post) => {
//     post.description == null
//       ? ""
//       : (text += `<div class="post">
//     <img src="${post.urlToImage}"
//       <h6>${post.title.split(" ").splice(0, 3).join(" ")}</h6>
//       <p>${post.description.split(" ").splice(0, 3).join(" ")}
//       </p>
//       <a href="${post.url}">Red More</a>
//     </div>`);
//   });
//   document.querySelector(".con").innerHTML = text;
// }
//
// function getbusiness(callback) {
//   let myhtp = new XMLHttpRequest();
//   myhtp.open(
//     "GET",
//     `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2573d1ae4a0043dca6ca622f4d0e6fe9
// `
//   );
//   myhtp.send();
//   let postContainer;
//   myhtp.onreadystatechange = () => {
//     if (myhtp.readyState == 4) {
//       postContainer = JSON.parse(myhtp.response).articles;
//       console.log("business", postContainer);
//       // displayPosts();
//     }
//   };
// }
// function getSports(callback) {
//   let myhtp = new XMLHttpRequest();
//   myhtp.open(
//     "GET",
//     `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=2573d1ae4a0043dca6ca622f4d0e6fe9
// `
//   );
//   myhtp.send();
//   let postContainer;
//   myhtp.onreadystatechange = () => {
//     if (myhtp.readyState == 4) {
//       postContainer = JSON.parse(myhtp.response).articles;
//       console.log("sports", postContainer);
//       callback();
//       // displayPosts();
//     }
//   };
// }
// function getGeneral(callback) {
//   let myhtp = new XMLHttpRequest();
//   myhtp.open(
//     "GET",
//     `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=2573d1ae4a0043dca6ca622f4d0e6fe9
// `
//   );
//   myhtp.send();
//   let postContainer;
//   myhtp.onreadystatechange = () => {
//     if (myhtp.readyState == 4) {
//       postContainer = JSON.parse(myhtp.response).articles;
//       console.log("general", postContainer);
//       // displayPosts();
//       callback();
//     }
//   };
// }
// function ApiDone() {
//   console.log("Done");
// }
// getSports(() => {
//   getGeneral(() => {
//     getbusiness(ApiDone);
//   });
// });

let myhtp = new XMLHttpRequest();
myhtp.open(
  "GET",
  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2573d1ae4a0043dca6ca622f4d0e6fe9"
);
myhtp.send();
let postcontainer;
myhtp.onreadystatechange = () => {
  if (myhtp.readyState == 4) {
    postcontainer = JSON.parse(myhtp.response);
    // console.log("general", contposts);
    displayposts();
  }
  // console.log(myhtp.readyState);
  // console.log(myhtp.status);
  // console.log(myhtp.response);
};
function displayposts() {
  let temp = "";
  postcontainer.forEach((post) => {
    temp += `<div class="post">
//     <img src="${post.urlToImage}"
//       <h6>${post.title.split(" ").splice(0, 3).join(" ")}</h6>
//       <p>${post.description.split(" ").splice(0, 3).join(" ")}
//       </p>
//       <a href="${post.url}">Red More</a>
//     </div>`;
  });
  document.querySelector("show ").innerHTML = temp;
}
