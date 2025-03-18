document.getElementById("projet").addEventListener("click", function() {
    this.style.width = "100vw"; // Élargit comme une porte
    this.style.height = "100vh";
    this.style.backgroundColor = "black";

    setTimeout(() => {
        window.location.href = "projet.html"; // Redirige après l'effet
    }, 1000); // Attend 1s avant d’ouvrir la nouvelle page
});