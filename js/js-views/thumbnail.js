import { router } from "../router.js";
import { ressource } from "../metier/Ressources.js";
import { Meme } from "../metier/meme.js";

const baseView = "thumbnail";
const PREVIEW_CONTAINER = "#thumbnail-container";

export const initThumbnail = () => {
  if (ressource.loaded) {
    initPreview();
  } else {
    ressource.loadRessources(() => {
      initPreview();
    });
  }
};
const initPreview = () => {
  const listContainer = document.querySelector(PREVIEW_CONTAINER);
  const basePreviewer = document.querySelector("#thumbnail-meme-");
  ressource.meme.forEach((meme) => {
    const newPreviewer = basePreviewer.cloneNode(true);
    newPreviewer.id += meme.id;
    newPreviewer.querySelector("a").href += meme.id;
    newPreviewer.querySelector("a>div").innerHTML = meme.titre;
    listContainer.appendChild(newPreviewer);
    const img = ressource.images.find(im => im.id === meme.imageId);
    Meme.render(meme, "#" + newPreviewer.id, img);
  });
};
