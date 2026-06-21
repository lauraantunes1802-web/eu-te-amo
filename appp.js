// JavaScript source code
const botao = document.getElementById("botao");
const area = document.getElementById("coracoes");

const cores = [
    "#ff0000",
    "#ff00ff",
    "#00ffff",
    "#00ff00",
    "#ffff00",
    "#ff8800",
    "#ffffff"
];

botao.addEventListener("click", () => {

    for(let i = 0; i < 100; i++){

        const coracao = document.createElement("div");

        coracao.classList.add("coracao");

        coracao.innerHTML = "❤️💛💚💜";

        coracao.style.left =
            Math.random() * window.innerWidth + "px";

        coracao.style.top =
            Math.random() * window.innerHeight + "px";

        coracao.style.color =
            cores[Math.floor(Math.random() * cores.length)];

        coracao.style.fontSize =
            (20 + Math.random() * 60) + "px";

        area.appendChild(coracao);

        setTimeout(() => {
            coracao.remove();
        }, 4000);
    }

});