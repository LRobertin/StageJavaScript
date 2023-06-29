import { ressource } from "../metier/Ressources.js";
import { Meme } from "../metier/meme.js";
let currentMeme;
let currentImage;
const VIEW_EDITOR_CSS_SELECTOR = "#editor";

export const initEditor = () => {
  initFormEvent();
  if (ressource.loaded) {
    initSelectImages();
    setCurrentMeme(new Meme());
  } else {
    ressource.loadRessources((res) => {
      initSelectImages();
      setCurrentMeme(new Meme());
    });
  }
};

const initFormEvent = () => {
  var form = document.forms["meme-form"];
  form["titre"].addEventListener("input", function (evt) {
    currentMeme.titre = evt.target.value;
    Meme.render(currentMeme, VIEW_EDITOR_CSS_SELECTOR, currentImage);
  });
  form["imageId"].addEventListener("input", function (evt) {
    currentMeme.imageId = Number(evt.target.value);
    currentImage = ressource.images.find(
      (img) => img.id === currentMeme.imageId
    );
    Meme.render(currentMeme, VIEW_EDITOR_CSS_SELECTOR, currentImage);
  });
  form["text"].addEventListener("input", function (evt) {
    currentMeme.text = evt.target.value;
    Meme.render(currentMeme, VIEW_EDITOR_CSS_SELECTOR, currentImage);
  });
  form["x"].addEventListener("input", function (evt) {
    currentMeme.x = Number(evt.target.value);
    Meme.render(currentMeme, VIEW_EDITOR_CSS_SELECTOR, currentImage);
  });
  form["y"].addEventListener("input", function (evt) {
    currentMeme.y = Number(evt.target.value);
    Meme.render(currentMeme, VIEW_EDITOR_CSS_SELECTOR, currentImage);
  });
  form["color"].addEventListener("input", function (evt) {
    currentMeme.color = evt.target.value;
    Meme.render(currentMeme, VIEW_EDITOR_CSS_SELECTOR, currentImage);
  });
  form["font-size"].addEventListener("input", function (evt) {
    currentMeme.fontsize = Number(evt.target.value);
    Meme.render(currentMeme, VIEW_EDITOR_CSS_SELECTOR, currentImage);
  });
  form["font-weight"].addEventListener("input", function (evt) {
    currentMeme.fontweight = Number(evt.target.value);
    Meme.render(currentMeme, VIEW_EDITOR_CSS_SELECTOR, currentImage);
  });
  form["underline"].addEventListener("input", function (evt) {
    currentMeme.underline = evt.target.checked;
    Meme.render(currentMeme, VIEW_EDITOR_CSS_SELECTOR, currentImage);
  });
  form["italic"].addEventListener("input", function (evt) {
    currentMeme.italic = evt.target.checked;
    Meme.render(currentMeme, VIEW_EDITOR_CSS_SELECTOR, currentImage);
  });
};

const initFormValues = () => {
  const form = document.forms["meme-form"];
  form["titre"].value = currentMeme.titre;
  form["text"].value = currentMeme.text;
  form["x"].value = currentMeme.x;
  form["y"].value = currentMeme.y;
  form["imageId"].value = currentMeme.imageId;
  form["fontSize"].value = currentMeme.fontSize;
  form["fontWeight"].value = currentMeme.fontWeight;
  form["color"].value = currentMeme.color;
  form["italic"].checked = currentMeme.italic;
  form["underline"].checked = currentMeme.underline;
};

const setCurrentMeme = (meme) => {
  currentMeme = meme;
  initFormValues();
  const img = ressource.images.find((im) => im.id === meme.imageId);
  Meme.render(meme, VIEW_EDITOR_CSS_SELECTOR, img);
};

const initSelectImages = () => {
  var select = document.forms["meme-form"]["imageId"];
  select.innerHTML = "";

  var optBase = document.createElement("option");
  optBase.value = "-1";
  optBase.innerHTML = "Only text";
  select.appendChild(optBase);

  ressource.images.forEach(function (img) {
    var opt = optBase.cloneNode(true);
    opt.value = img.id;
    opt.innerHTML = img.titre;
    select.appendChild(opt);
  });
};
