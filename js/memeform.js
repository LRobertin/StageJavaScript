var currentMeme = new Meme();
//console.log(currentMeme);

function initMemeEditor() {
  var form = document.forms["meme-form"];

  form["titre"].addEventListener("input", function (evt) {
    currentMeme.titre = evt.target.value;
    renderMeme();
  });
  form["imageId"].addEventListener("input", function (evt) {
    currentMeme.imageId = evt.target.value;
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
}

function renderMeme(meme) {
  if (undefined === meme) {
    meme = currentMeme;
  }
  var svg = document.querySelector("#editor-viewer svg");
  var textElement = svg.querySelector("text");
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
  var children = select.children;
  for (var index = 1; index < children.length; index++) {
    children[index].remove();
  }

  var optBase = document.createElement("option");
  optBase.value = "test";
  optBase.innerHTML = "test";
  select.appendChild(optBase);

  images.forEach(function (img) {
    var opt = optBase.cloneNode(true);
    opt.value = img.id;
    opt.innerHTML = img.titre;
    select.appendChild(opt);
  });
}
