import { initMemeEditor } from "./memeform.js";

function init() {
  document
    .querySelector("#theme-switch")
    .addEventListener("change", function (evt) {
      changeTheme(evt.target.checked);
    });

  var x = document.getElementsByTagName("footer")[0];
  var currentDate = new Date().toISOString();
  var style = x.style;
  x.innerHTML = currentDate;
  style.textDecoration = "underline";
  style.fontStyle = "italic";
  style.backgroundColor = "rgba(128,128,128,0.1)";
  console.log(x);

  initMemeEditor();
}

document.addEventListener("DOMContentLoaded", function (evt) {
  console.log(evt);
  init();
  
});

/**
 *
 * @param {boolean} isDark
 */

function changeTheme(isDark) {
  var nav = document.getElementsByTagName("nav")[0];
  var btn = document.getElementById("theme-switch");
  var txt = document.getElementById("theme-text");

  if (isDark) {
    document.body.className = "dark";
    nav.classList.replace("bg-light", "bg-dark");
    nav.classList.replace("navbar-light", "navbar-dark");
    btn.checked = true;
    txt.textContent = "Dark";
  } else {
    document.body.className = "";
    nav.classList.replace("bg-dark", "bg-light");
    nav.classList.replace("navbar-dark", "navbar-light");
    btn.checked = false;
    txt.textContent = "Light";
  }
}
