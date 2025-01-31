document.addEventListener("DOMContentLoaded", function() {
    var elemento = document.querySelector(".first-page");
    elemento.classList.add("ativo");
});

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        exibirCidade(latitude, longitude);
    });
}

function exibirCidade(latitude, longitude) {
    var url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var cidade = data.address.village || data.address.city || data.address.town;
            if (cidade === "Uraí") {
                cidade = "Nova América da Colina";
            }
            var ISO = data.address["ISO3166-2-lvl4"];
            var partes = ISO.split("-");
            var novoISO = `${partes[1]} - ${partes[0]}`;
            document.getElementById('local').innerHTML = `${cidade}, ${novoISO}`;
        })
        .catch(error => console.error('Erro ao obter a localização:', error));
}
