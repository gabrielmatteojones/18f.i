export function dashboardPage() {
  return `
    <h2>Dashboard DPS</h2>
    <nav>
      <button id="posts">Post</button>
      <button id="logout">Logout</button>
    </nav>
    <div id="content"></div>
  `;
}

document.addEventListener("click", (e) => {
  if (e.target.id === "logout") {
    window.netlifyIdentity.logout();
  }
});
