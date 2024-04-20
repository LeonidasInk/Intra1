document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const carouselItems = document.querySelectorAll(".carousel-item"); // se llama para obtener todas las imágenes del carrusel
    const gameItems = document.querySelectorAll(".game-item"); // Obtener todos los elementos de juegos ingresados
      // Busca el juego indicado al hacer click 
    searchButton.addEventListener("click", function() {
      const searchTerm = searchInput.value.trim().toLowerCase();
  
      // Ocultar todas las imágenes del carrusel
      carouselItems.forEach(item => {
        item.style.display = "none";
      });
  
      // Ocultar todos los elementos de juego
      gameItems.forEach(item => {
        item.style.display = "none";
      });
  
      // Mostrar solo el juego que coincide con el término de búsqueda
      gameItems.forEach(item => {
        const gameName = item.querySelector("h3").textContent.trim().toLowerCase();
        if (gameName.includes(searchTerm)) {
          item.style.display = "block";
        }
      });
    });
      //Se borra el juego a buscar
    searchInput.addEventListener("input", function() {
      const searchTerm = searchInput.value.trim().toLowerCase();
  
      // Mostrar todas las imágenes del carrusel al borrar el texto de búsqueda
      carouselItems.forEach(item => {
        item.style.display = "block";
      });
  
      // Mostrar todos los elementos de juego al borrar el texto de búsqueda
      gameItems.forEach(item => {
        item.style.display = "block";
      });
  
     
    });
  });
  