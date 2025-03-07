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

document.addEventListener('DOMContentLoaded', function () {
    const aboutSection = document.getElementById('about');
    const textElement = aboutSection.querySelector('.texto');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                textElement.classList.add('animated'); // Adiciona 'animated' ao entrar na tela
                //observer.unobserve(aboutSection); // Desativa o observer após a animação ocorrer uma vez (opcional)
            } else {
                // Se quiser reverter a animação quando sair da tela (opcional):
                textElement.classList.remove('animated');
            }
        });
    }, {
        threshold: 0.1, // Define quando a seção é considerada "visível" (10% visível)
        rootMargin: "0px 0px -20% 0px"
    });

    observer.observe(aboutSection); // Observa a seção "Sobre Nós"
});


document.addEventListener("DOMContentLoaded", function () {
    VANTA.NET({
        el: document.querySelector("header"),
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xA982EC,
        backgroundColor: 0x65AEFC,
        points: 4.00,
        maxDistance: 27.00,
        spacing: 14.00,
        showDots: false
    });
});



document.addEventListener("DOMContentLoaded", function () {
    VANTA.NET({
        el: "#integracoes",
        color: 0x007BFF,  // Azul sutil
        backgroundColor: 0xA982EC,  // Fundo preto
        points: 10,  // Quantidade de pontos (menos = mais sutil)
        maxDistance: 15,  // Distância das conexões entre os pontos
        spacing: 20,  // Espaçamento entre os pontos
        showDots: false,  // Ocultar os pontos para um efeito mais limpo
    });
});

document.addEventListener("DOMContentLoaded", function () {
    VANTA.NET({
        el: "#services",
        color: 0x007BFF,  // Azul sutil
        backgroundColor: 0xA982EC,  // Fundo preto
        points: 10,  // Quantidade de pontos (menos = mais sutil)
        maxDistance: 15,  // Distância das conexões entre os pontos
        spacing: 20,  // Espaçamento entre os pontos
        showDots: false,  // Ocultar os pontos para um efeito mais limpo
    });
});

document.addEventListener("DOMContentLoaded", function () {
    VANTA.NET({
        el: "#contact",
        color: 0x007BFF,  // Cor branca para remover a linha azul
        backgroundColor: 0xffffff,  // Fundo roxo (ajuste conforme necessário)
        points: 10,  // Quantidade de pontos
        maxDistance: 15,  // Distância das conexões
        spacing: 20,  // Espaçamento entre pontos
        showDots: false,  // Ocultar pontos para um efeito mais limpo
    });
});


document.addEventListener("DOMContentLoaded", function () {
    VANTA.NET({
        el: "#about",
        color: 0x007BFF,  // Cor branca para remover a linha azul
        backgroundColor: 0xffffff,  // Fundo roxo (ajuste conforme necessário)
        points: 10,  // Quantidade de pontos
        maxDistance: 15,  // Distância das conexões
        spacing: 20,  // Espaçamento entre pontos
        showDots: false,  // Ocultar pontos para um efeito mais limpo
    });
});
