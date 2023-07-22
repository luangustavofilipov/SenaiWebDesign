// Função para o menu

// Declaração das Variáveis
let menu = document.querySelector("#menu-icon");
let navbar = querySelector(".navbar");

// Função para ocultar e exibir o menu
menu.onClick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
}