import { Meme } from "./Meme.js";
import { images } from "./values.js";

var currentMeme = new Meme();
//console.log(currentMeme);

export function initMemeEditor() {
  var form = document.forms["meme-form"];

  form["titre"].addEventListener("input", function (evt) {
    currentMeme.titre = evt.target.value;
    renderMeme();
  });
  form["imageId"].addEventListener("input", function (evt) {
    currentMeme.imageId = Number(evt.target.value);
    renderMeme();
  });
  form["text"].addEventListener("input", function (evt) {
    currentMeme.text = evt.target.value;
    renderMeme();
  });
  form["x"].addEventListener("input", function (evt) {
    currentMeme.x = Number(evt.target.value);
    renderMeme();
  });
  form["y"].addEventListener("input", function (evt) {
    currentMeme.y = Number(evt.target.value);
    renderMeme();
  });
  form["color"].addEventListener("input", function (evt) {
    currentMeme.color = evt.target.value;
    renderMeme();
  });
  form["font-size"].addEventListener("input", function (evt) {
    currentMeme.fontsize = Number(evt.target.value);
    renderMeme();
  });
  form["font-weight"].addEventListener("input", function (evt) {
    currentMeme.fontweight = Number(evt.target.value);
    renderMeme();
  });
  form["underline"].addEventListener("input", function (evt) {
    currentMeme.underline = evt.target.checked;
    renderMeme();
  });
  form["italic"].addEventListener("input", function (evt) {
    currentMeme.italic = evt.target.checked;
    renderMeme();
  });
  loadSelectImages(images);
}

function renderMeme(meme) {
  if (undefined === meme) {
    meme = currentMeme;
  }
  var svg = document.querySelector("#editor-viewer svg");
  var img = images.find(function (img) {
    return img.id === meme.imageId;
  });

  svg.setAttribute(
    "viewBox",
    `0 0 ${undefined !== img ? img.w : 500} ${undefined !== img ? img.h : 500}`
  );

  var textElement = svg.querySelector("text");
  var imgElement = svg.querySelector("image");
 
  imgElement.setAttribute("xlink:href", undefined != img ? img.url : "");

  textElement.style.fill = meme.color;
  textElement.innerHTML = meme.text;
  textElement.style.textDecoration = meme.underline ? "underline" : "none";
  textElement.setAttribute("font-weight", meme.fontweight);
  textElement.setAttribute("font-size", meme.fontsize);
  textElement.setAttribute("font-style", meme.italic ? "italic" : "normal");
  textElement.setAttribute("x", meme.x);
  textElement.setAttribute("y", meme.y);
}
function loadSelectImages(images) {
  var select = document.forms["meme-form"]["imageId"];
  // vidange du select
  var children = select.children[0].cloneNode(true);
  select.innerHTML = "";

  var optBase = document.createElement("option");
  optBase.value = "selectionImage";
  optBase.innerHTML = "Selectionner une image";
  select.appendChild(optBase);

  images.forEach(function (img) {
    var opt = optBase.cloneNode(true);
    opt.value = img.id;
    opt.innerHTML = img.titre;
    select.appendChild(opt);
  });
}
