import { initHome } from "./js-views/home.js";

/**
 * Variable de config des routes
 */

const routeConfig = {
  routes: [
    {
      path: "/",
      initialisation: initHome,
      templateUrl: "/view/home.html",
    },
    {
      path: "/thumbnail",
      initialisation: undefined,
      templateUrl: "/view/thumbnail.html",
    },
    {
      path: "/editor",
      initialisation: undefined,
      templateUrl: "/view/editor.html",
    },
    {
      path: "/break",
      initialisation: undefined,
      templateUrl: "/vue/templateQuiExistePasSurLeServeur.html",
    },
  ],
};
/**
 *
 * Fonction de maintient de la route
 */
export const handleRoute = (params) => {
  const pathName = location.pathname;
  console.log(pathName);
};

class Router {
  #currentRoute;
  get currentRoute() {
    return this.#currentRoute;
  }

  constructor() {
    document.addEventListener("DOMContentLoaded", (evt) => {
      this.#initRouterLinks();
    });
  }
  /**
   * Manage la route en cours
   */
  handleRoute() {
    const pathName = location.pathname;
    console.log(pathName);
    this.#currentRoute = routeConfig.routes.find(
      (route) => route.path === pathName
    );
    this.#instanciateRouteTemplate();
  }
  /**
   * Navigate to
   * @param {string} pathName chemin commencant par
   */
  changeRoute(pathName) {
    history.pushState(undefined, undefined, pathName);
    this.handleRoute();
  }
  /**
   * initatilise le contenu de templateTewte si non present
   * et declencge le chargement DOM du contenu
   */
  #instanciateRouteTemplate() {
    if (undefined !== this.#currentRoute.templateText) {
      this.#loadCurrentContentDOMContent();
    } else {
      fetch(this.#currentRoute.templateUrl)
        .then((resp) => resp.text())
        .then((t) => {
          this.#currentRoute.templateText = t;
          this.#loadCurrentContentDOMContent();
        });
    }
  }

  /**
   * changement du contenu text/HTML de la vue dans le noeud du selecteur en parametre
   * @param {string} domConttainerSelector css selecteur du noeud a charger pour la vue
   */

  #loadCurrentContentDOMContent(domContainerSelector = "article") {
    document.querySelector(domContainerSelector).innerHTML =
      this.#currentRoute.templateText;
    this.#initRouterLinks(domContainerSelector);
    if (undefined !== this.#currentRoute.initialisation) {
      this.#currentRoute.initialisation();
    }
  }

  #initRouterLinks(baseSelector = "body") {
    const links = document.querySelectorAll(baseSelector + " a");
    links.forEach((link) => {
      link.removeEventListener("click", this.#handleLinkEvent);
      link.addEventListener("click", this.#handleLinkEvent);
    });
  }
  #handleLinkEvent=(evt)=> {
    evt.preventDefault();
    this.changeRoute(evt.target.href);
  }
}

export const router = new Router();
