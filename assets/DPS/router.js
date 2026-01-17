import { loginPage } from "./pages/login.js";
import { dashboardPage } from "./pages/dashboard.js";

export function router() {
  const app = document.getElementById("app");
  const user = window.netlifyIdentity.currentUser();

  if (!user) {
    app.innerHTML = loginPage();
  } else {
    app.innerHTML = dashboardPage();
  }
}
