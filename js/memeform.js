var currentMeme = new Meme();
//console.log(currentMeme);

function initMemeEditor() {
  var form = document.forms["meme-form"];

  form["titre"].addEventListener("input", function (evt) {
    currentMeme.titre = evt.target.value;
  });
  form["imageId"].addEventListener("input", function (evt) {
    currentMeme.imageId = evt.target.value;
  });
  form["text"].addEventListener("input", function (evt) {
    currentMeme.text = evt.target.value;
  });
  form["x"].addEventListener("input", function (evt) {
    currentMeme.x = Number(evt.target.value);
  });
  form["y"].addEventListener("input", function (evt) {
    currentMeme.y = Number(evt.target.value);
  });
  form["color"].addEventListener("input", function (evt) {
    currentMeme.color = evt.target.value;
    renderMeme(currentMeme);
  });
  form["font-size"].addEventListener("input", function (evt) {
    currentMeme.fontsize = Number(evt.target.value);
  });
  form["font-weight"].addEventListener("input", function (evt) {
    currentMeme.fontweight = Number(evt.target.value);
  });
  form["underline"].addEventListener("input", function (evt) {
    currentMeme.underline = evt.target.checked;
  });
  form["italic"].addEventListener("input", function (evt) {
    currentMeme.italic = evt.target.checked;
  });
}

function renderMeme(meme) {
       var svg =  document.querySelector("#editor-viewer svg");
       var textElement = svg.querySelector('text');
       textElement.style.fill = meme.color;
       textElement.style.underline = meme.underline ? "underline" : "none"; 
}
