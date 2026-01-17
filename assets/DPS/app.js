import { router } from "/assets/DPS/router.js";

window.netlifyIdentity.on("login", () => {
  router();
});

window.netlifyIdentity.on("logout", () => {
  router();
});

router();
