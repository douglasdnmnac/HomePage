// Obtendo a data atual
var dataAtual = new Date();
var minutos;
var horas = dataAtual.getHours();

// Obtendo o dia da semana
var diaSemana = dataAtual.getDay();
var nomesDosDias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
var nomeDoDiaDaSemana = nomesDosDias[diaSemana];

// Obtendo o dia do mês e o mês atual e o ano
var diaMes = dataAtual.getDate();
var mes = dataAtual.getMonth();
var nomesDosMeses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
var nomeDosMesesPorExtenso = nomesDosMeses[mes];
var ano = dataAtual.getFullYear() // Ano (2024)

// Função para exibir a hora atual
function hour() {
    var horaLocal = new Date();
    var horas = horaLocal.getHours();

    // Chamando a função hour() novamente a cada segundo
    setInterval(hour, 60000);
    phrase(horas)
}

function minute() {
    var horaLocal = new Date();
    var minutos = horaLocal.getMinutes();

    // Formatando os minutos e as horas com zero à esquerda, se necessário
    var minutosFormatados = minutos < 10 ? '0' + minutos : minutos;
    var horasFormatados = horas < 10 ? '0' + horas : horas;

    // Atualizando os elementos do relógio
    document.getElementById("big-clock").innerHTML = horasFormatados + ":" + minutosFormatados;
    document.getElementById("small-clock").innerHTML = horasFormatados + ":" + minutosFormatados;

    setInterval(minute, 1000);
}

function phrase(horas) {       //Define a Frase a ser utilizada com base na Hora Local
    if (horas >= 6 && horas < 12) {                                                                                                                   //Se for mais de 06h e menos que 12h
        document.getElementById("initial-phrase").innerHTML = "Olá, Bom Dia",
        console.log("Teste")
    } else if (horas >= 12 && horas < 19) {                                                                                                      //Se for mais de 12h e menos que 19h
        document.getElementById("initial-phrase").innerHTML = "Olá, Boa Tarde"
    } else {                                                                                                                                                                  //Se for mais de 19h e menos que 06h
        document.getElementById("initial-phrase").innerHTML = "Olá, Boa Noite"
    }}

// Função para exibir a data atual
function dateInfo() {
    // Formatando o mês com zero à esquerda, se necessário
    var mesFormatado = mes < 10 ? '0' + mes : mes;

    // Atualizando os elementos com as informações da data
    document.getElementById("small-infos").innerHTML = nomeDoDiaDaSemana + " | " + "<strong>" + diaMes + "/" + mesFormatado + "</strong>";
    document.getElementById("big-date").innerHTML = "<strong>" + nomeDoDiaDaSemana + " " + "(" + diaMes + "), </strong>" + nomeDosMesesPorExtenso + " de " + ano;
}

// Chamando as funções para iniciar o relógio e exibir a data
hour();
minute();
dateInfo();
