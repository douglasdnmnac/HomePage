
    var fundo = document.querySelector(".first-page");
    var fundoBlur = document.querySelector(".second-page")

var wallpaper = [   // Define os Wallpaper 
    "url(Backgrounds/Background-Fall_Leaves.jpg)",
    "url(Backgrounds/Background-Green_Leaves.jpg)",
    "url(Backgrounds/Background-Leaves.jpg)",
    "url(Backgrounds/Background-San_Franscisco.jpg)",
    "url(Backgrounds/Background-Sky.jpg)",
    "url(Backgrounds/Background-Sun_Florest.jpg)",
];

var faviconLinks = [     // Define os Favicons                                        
    "Favicon/Fall_Leaves.png",
    "Favicon/Green_Leaves.png",
    "Favicon/Leaves.png",
    "Favicon/San_Franscisco.png",
    "Favicon/Sky.png",
    "Favicon/Sun_Florest.png",
]

var fundoAtual = localStorage.getItem('fundoAtual') || 0;   // Recupera o últmo Wallpaper
fundo.style.backgroundImage = wallpaper[fundoAtual];
fundoBlur.style.backgroundImage = wallpaper[fundoAtual]

var twoClick = document.getElementById("big-clock")     //  Observa o Relogio e se ativo chama a função
twoClick.addEventListener("dblclick", changeBackgroundSky)

function changeBackgroundSky() {    // Muda o  Wallpaper
    fundo.style.backgroundSize = "100vw";
    fundo.style.transition = "0s";
    fundoAtual = (parseInt(fundoAtual) + 1) % wallpaper.length; // Atualiza o índice do fundo
    fundo.style.backgroundImage = wallpaper[fundoAtual];
    fundoBlur.style.backgroundImage = wallpaper[fundoAtual];
    localStorage.setItem('fundoAtual', fundoAtual); 
    changeFaviconColor(wallpaper[fundoAtual]); 
    setTimeout(tamanhoFundo, 600)
    function tamanhoFundo() {
        fundo.style.transition = "10s";
        fundo.style.backgroundSize = "200vw"
    }
}

changeFaviconColor(wallpaper[fundoAtual]);  // Chama a função para mudar o Favicon

function changeFaviconColor(wallpaperUrl) {    //Muda o Favicon

    var favicon;    //Escolhe o Favicon correspondente ao Wallpaper
    if (wallpaperUrl.includes('Fall_Leaves')) {
        favicon = faviconLinks[0];
    } else if (wallpaperUrl.includes('Green_Leaves')) {
        favicon = faviconLinks[1];
    } else if (wallpaperUrl.includes('Leaves')) {
        favicon = faviconLinks[2];
    } else if (wallpaperUrl.includes('San_Franscisco')) {
        favicon = faviconLinks[3];
    } else if (wallpaperUrl.includes('Sky')) {
        favicon = faviconLinks[4];
    } else if (wallpaperUrl.includes('Sun_Florest')) {
        favicon = faviconLinks[5];
    } else {
        favicon = faviconLinks[0]; // Favicon padrão
    }

    var link = document.querySelector("link[rel~='icon']");
    if (link) {
        link.href = favicon;
    } else {
        console.log(Error)
    }

}
