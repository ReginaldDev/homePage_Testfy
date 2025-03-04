document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarMenu = document.querySelector("#navbarNav");
    const bsCollapse = new bootstrap.Collapse(navbarMenu, { toggle: false });

    // Adiciona comportamento ao menu sanduíche
    navbarToggler.addEventListener("click", function () {
        if (navbarMenu.classList.contains("show")) {
            bsCollapse.hide(); // Fecha o menu
        } else {
            bsCollapse.show(); // Abre o menu
        }
    });

    // Fechar o menu quando qualquer link for clicado e aplicar scroll suave
    document.querySelectorAll(".nav-link").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();

            // Fecha o menu ao clicar em um link
            bsCollapse.hide();

            // Scroll suave para a seção correspondente
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});



