export function loginPage() {
  return `
    <h1>BiblioWin</h1>
    <button id="login">Login</button>
  `;
}

document.addEventListener("click", (e) => {
  if (e.target.id === "login") {
    window.netlifyIdentity.open();
  }
});
