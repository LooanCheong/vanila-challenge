// <⚠️ DONT DELETE THIS ⚠️>
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

const title = document.querySelector("body h2");

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
  mouseenter: function () {
    title.innerText = "Mouse is here";
    title.style.color = "green";
  },
  mouseleave: function () {
    title.innerText = "Mouse is gone";
    title.style.color = "blue";
  },
  resize: function () {
    title.innerText = "You just resized";
    title.style.color = "purple";
  },
  rightclick: function () {
    title.innerText = "That was a right click!";
    title.style.color = "tomato";
  },
};

title.addEventListener("mouseenter", superEventHandler.mouseenter);

title.addEventListener("mouseleave", superEventHandler.mouseleave);

window.addEventListener("resize", superEventHandler.resize);

window.addEventListener("auxclick", superEventHandler.rightclick);
