document.addEventListener("DOMContentLoaded", function () {
    var aside = document.getElementById("miAside");
    var toggleButton = document.getElementById("toggleButton");
  
    toggleButton.addEventListener("click", function () {
        // Alternar la visibilidad del aside
        if (aside.style.display === "none") {
            aside.style.display = "block";
        } else {
            aside.style.display = "none";
        }
    });
  });
  