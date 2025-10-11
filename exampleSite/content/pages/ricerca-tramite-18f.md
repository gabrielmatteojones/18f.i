---
title: Ricerca Tramite 18F
url: /browse
image: /images/uploads/base.png
---
<!-- Barra di ricerca Google -->
<form action="https://www.google.com/search" method="get" target="_blank" class="search-form">
  <input type="text" name="q" placeholder="Cerca su Google..." required>
  <button type="submit">🔍</button>
</form>

<style>
  .search-form {
    display: flex;
    max-width: 400px;
    margin: 20px auto;
    border: 2px solid #ccc;
    border-radius: 30px;
    overflow: hidden;
    background-color: white;
  }

  .search-form input[type="text"] {
    flex: 1;
    padding: 10px 15px;
    border: none;
    outline: none;
    font-size: 16px;
  }

  .search-form button {
    background-color: #4285F4;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
  }

  .search-form button:hover {
    background-color: #357ae8;
  }
</style>
