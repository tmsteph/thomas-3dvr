document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".read-more-btn");
  const extraContent = document.querySelector(".extra-content");

  extraContent.style.display = "none"; // Oculta los párrafos extra al cargar

  button.addEventListener("click", function (event) {
    event.preventDefault(); // Evita que el enlace recargue la página

    if (extraContent.style.display === "none") {
      extraContent.style.display = "block";
      button.textContent = "Read Less";
    } else {
      extraContent.style.display = "none";
      button.textContent = "Read More";
    }
  });
});

