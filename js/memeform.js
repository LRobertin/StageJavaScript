var currentMeme = new Meme();
//console.log(currentMeme);

function initMemeEditor() {
  var form = document.forms["meme-form"];

  form["titre"].addEventListener("imput", function (evt) {
    currentMeme.titre = evt.target.value;
  });
  form["imageId"].addEventListener("imput", function (evt) {
    currentMeme.imageId = evt.target.value;
  });
  form["text"].addEventListener("imput", function (evt) {
    currentMeme.text = evt.target.value;
  });
  form["x"].addEventListener("imput", function (evt) {
    currentMeme.x = Number(evt.target.value);
  });
  form["y"].addEventListener("imput", function (evt) {
    currentMeme.y = Number(evt.target.value);
  });
  form["color"].addEventListener("imput", function (evt) {
    currentMeme.color = evt.target.value;
  });
  form["font-size"].addEventListener("imput", function (evt) {
    currentMeme.fontsize = Number(evt.target.value);
  });
  form["font-weight"].addEventListener("imput", function (evt) {
    currentMeme.fontweight = Number(evt.target.value);
  });
  form["underline"].addEventListener("imput", function (evt) {
    currentMeme.underline = evt.target.checked;
  });
  form["italic"].addEventListener("imput", function (evt) {
    currentMeme.italic = evt.target.checked;
  });
}
