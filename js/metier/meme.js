import REST_ADR, { RESSOURCE_PATH } from "../constantes.js";

export class Meme {
  titre = "";
  text = "";
  x = 0;
  y = 20;
  imageId = -1;
  fontSize = 20;
  fontWeight = 500;
  italic = false;
  color = "#000000";

  save(callback) {
    fetch(REST_ADR + RESSOURCE_PATH.memes, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(this),
    })
      .then((e) => e.json)
      .then((o) => {
        if (undefined !== callback) {
          callback(o);
        }
      });
  }

  static render(meme, cssSelector, img) {
    const svg = document.querySelector(cssSelector + " svg");

    svg.setAttribute(
      "viewBox",
      `0 0 ${undefined !== img ? img.w : 500} ${
        undefined !== img ? img.h : 500
      }`
    );

    const textElement = svg.querySelector("text");
    const imgElement = svg.querySelector("image");

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
}
