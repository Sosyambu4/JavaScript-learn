import Characters from "./pages/characters.js";
import SingleCharacter from "./pages/SingleCharacter.js";
import Locations from "./pages/locations.js";
import SingleLocation from "./pages/singleLocation.js";

const router = new Navigo(null, true, "#");

export default class RouterHandler {
  constructor() {
    this.createRoutes();
  }

  createRoutes() {
    const routes = [
      { path: "/", page: Characters },
      { path: "/character", page: SingleCharacter },
      { path: "/locations", page: Locations },
      { path: "/location", page: SingleLocation },
    ];

    routes.forEach(({ path, page }) => {
      router
        .on(path, () => {
          page(path);
        })
        .resolve();
    });
  }
}
