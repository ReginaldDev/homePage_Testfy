document.addEventListener("DOMContentLoaded", function () {
    // Adiciona comportamento ao menu sanduíche
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarMenu = document.querySelector("#navbarNav");

    navbarToggler.addEventListener("click", function () {
        navbarMenu.classList.toggle("show");
    });

    // Fechar o menu quando qualquer link for clicado e aplicar scroll suave
    document.querySelectorAll(".nav-link").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            // Fecha o menu
            navbarMenu.classList.remove("show");
            
            // Scroll suave para seções
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

});
