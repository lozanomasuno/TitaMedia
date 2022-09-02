document.getElementById("year").innerHTML = new Date().getFullYear();
let pictArrays = [
  "https://images.unsplash.com/photo-1657214059388-a35554015a42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1661922029552-536b580ad96e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1661983228573-731da056ea20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1662100829301-01f1d216a1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1662045010180-a2b1ac1652b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1662045413796-88788e99c357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1662013604846-84c9ec009755?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1659535979248-bf5954d21328?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1661985656725-3069ab2da0dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1662125106095-a4bcde17b379?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
];

let createGridPictures = () => {
  let newHtml = "";
  let gridBoard = document.querySelector(".grid-board");

  for (let i = 0; i < pictArrays.length; i++) {
    newHtml += '<div class="item level-1">';
    newHtml += '<div class="content">';
    newHtml += '<div class="content-overlay"></div>';
    newHtml += '<img src="';
    newHtml += pictArrays[i];
    newHtml += "   />";
    newHtml += '<div class="content-details fadeIn-bottom">';
    newHtml += '<div class="content-details fadeIn-bottom">';
    newHtml += '<h3 class="content-title">Creative Logo</h3>';
    newHtml += '<p class="content-text">Branding</p>';
    newHtml += "</div>";
    newHtml += "</div>";
    newHtml += "</div>";

    gridBoard.innerHTML = newHtml;
  }
};

window.onload = createGridPictures;
