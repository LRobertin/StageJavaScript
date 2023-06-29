export class Ressources {
  #images = [];
  #memes = [];
  get meme() {
    return this.#memes;
  }
  get images() {
    return this.images;
  }
  loadRessources() {}
}
