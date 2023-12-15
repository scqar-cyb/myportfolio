document.addEventListener("DOMContentLoaded", function () {
    // Défilement doux lors de la navigation
    const navLinks = document.querySelectorAll("nav");
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                behavior: "smooth",
                top: targetSection.offsetTop
            });
        });
    });

    // Effet de survol sur les projets du portfolio
    const portfolioProjects = document.querySelectorAll(".project");
    portfolioProjects.forEach(project => {
        project.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)";
        });

        project.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });
});
