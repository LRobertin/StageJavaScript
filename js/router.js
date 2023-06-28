/**
 * Variable de config des routes
 */

const routeConfig = {
  routes: [
    {
      path: "/thumbnail",
      initialisation: undefined,
      templateUrl: "/view/thumbnail.html",
    },
    {
      path: "/",
      initialisation: undefined,
      templateUrl: "/view/home.html",
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
  /**
   * Manage la route en cours
   */
  handleRoute() {
    const pathName = location.pathname;
    console.log(pathName);
  }
  /**
   * Navigate to
   * @param {string} pathName chemin commencant par
   */
  changeRoute(pathName) {}
}

const router = new Router();
router.handleRoute();
