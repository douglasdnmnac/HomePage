   // Cria o efeito de Zoom
   document.addEventListener("DOMContentLoaded", function() {
    var elemento = document.querySelector(".first-page");
    elemento.classList.add("ativo");});
    //Cria o efeito de Zoom

     // Define a Cidade, Estado e País
    if (navigator.geolocation) {                                                                                                                    // Se suportado GeoLocalização
        navigator.geolocation.getCurrentPosition(function(position) {                                      // Obtém a GeoLocalização
        var latitude = position.coords.latitude;                                                                                       // Obtém a Latitudde
        var longitude = position.coords.longitude;                                                                                // Obtém a Longitude
        exibirCidade(latitude, longitude)                                                                                                   // Chama a Função      
    })}

    function exibirCidade(latitude, longitude) {
        var url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;       // Utiliza a API para Obter os Dados

        fetch(url)
            .then(response => response.json())
            .then(data => {
            
                var cidade = data.address.village || data.address.city || data.address.town;     // Localiza a Cidade
                if (cidade === "Uraí"){                                                                                                                      // Verifica se é Uraí
                    cidade = "Nova América da Colina"}                                                                                    // Se for Uraí substitui para N.A.C
                var ISO = data.address["ISO3166-2-lvl4"];                                                                           // Pega o País e o Estado
                var partes = ISO.split("-");                                                                                                             // Separa o País e o Estado
                var novoISO = partes[1] + " - " + partes[0];                                                                           // Inverte o País e o Estado
                document.getElementById('local').innerHTML = cidade  + ", "+ novoISO;})}        // Exibe a Cidade, o Estado e o País
    //Define a Cidade, Estado e País
