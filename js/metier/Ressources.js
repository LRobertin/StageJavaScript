import REST_ADR, { RESSOURCE_PATH } from "../constantes.js";
export class Ressources {
  #images = [];
  #memes = [];
  #isItLoaded = false;
  get loaded() {
    return this.#isItLoaded;
  }
  get meme() {
    return this.#memes;
  }
  get images() {
    return this.#images;
  }
  /**
   *
   * @param {function} callback
   */
  loadRessources(callback) {
    const promiseImage = fetch(REST_ADR + RESSOURCE_PATH.images).then((resp) =>
      resp.json()
    );
    const promiseMemes = fetch(REST_ADR + RESSOURCE_PATH.memes).then((resp) =>
      resp.json()
    );
    Promise.all([promiseImage, promiseMemes]).then((array) => {
      //console.log(array);
      this.#images.splice(0);
      this.#images.push(...array[0]);
      this.#memes.splice(0);
      this.#memes.push(...array[0]);
      this.#isItLoaded = true;
      if (undefined !== callback) {
        callback(this);
      }
    });
  }
}
export const ressource = new Ressources();
