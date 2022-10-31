const body = document.querySelector("body");
body.style.backgroundColor = "aliceblue";

function windowResize() {
  if (window.innerWidth <= 300) {
    body.style.backgroundColor = "tomato";
  } else if (window.innerWidth > 300 && window.innerWidth <= 600) {
    body.style.backgroundColor = "blue";
  } else if (window.innerWidth > 600 && window.innerWidth <= 900) {
    body.style.backgroundColor = "yellow";
  } else if (window.innerWidth > 900 && window.innerWidth <= 1200) {
    body.style.backgroundColor = "green";
  } else {
    body.style.backgroundColor = "red";
  }
}

window.addEventListener("resize", windowResize);
