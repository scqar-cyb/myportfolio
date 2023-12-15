document.addEventListener("DOMContentLoaded", function () {
    // Récupérer la hauteur de l'en-tête
    const headerHeight = document.querySelector("nav").offsetHeight;

    // Défilement doux lors de la navigation
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            smoothScrollTo(targetSection, headerHeight);
        });
    });

    // Défilement doux vers la section cible avec décalage pour l'en-tête
    function smoothScrollTo(target, offset) {
        const startPosition = window.pageYOffset;
        const targetPosition = target.offsetTop - offset+140; // Appliquer le décalage
        const distance = targetPosition - startPosition;
        const duration = 800; // Durée de l'animation en millisecondes
        let startTimestamp;

        function step(timestamp) {
            if (!startTimestamp) startTimestamp = timestamp;
            const elapsed = timestamp - startTimestamp;
            const progress = Math.min(elapsed / duration, 1);
            window.scrollTo(100, startPosition + distance * progress);

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    }

    // Effet de survol sur les projets du portfolio
    const portfolioProjects = document.querySelectorAll(".project");
    portfolioProjects.forEach(project => {
        project.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.4)";
        });

        project.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
        project.addEventListener("click", function () {
            this.style.transform = "scale(1)";
        });

    });

    // Effet de survol sur les projets du portfolio
    const portfoliorectif = document.querySelectorAll(".rectif");
    portfoliorectif.forEach(rectif => {
        rectif.addEventListener("mouseenter", function () {
            this.style.transform = "scale(2)";
        });

        rectif.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
        rectif.addEventListener("click", function () {
            this.style.transform = "scale(1)";
        });

    });

});
