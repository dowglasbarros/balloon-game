function startGame() {
    var url = window.location.search;

    var levelGame = url.replace("?", "");

    var seconds = 0;

    if(levelGame == 1) {
        seconds = 120;
    }

    if(levelGame == 2) {
        seconds = 60;
    }

    if(levelGame == 3) {
        seconds = 30;
    }

    // Inserindo segundos no span
    document.getElementById('timer').innerHTML = seconds;

    // Quantidade de balões
    var numberOfBallons = 20;

    createBallons(numberOfBallons);

    // Imprimir quantidade de balões
    document.getElementById('full').innerHTML = numberOfBallons;
    document.getElementById('exploded').innerHTML = 0;

}

function createBallons(numberOfBallons) {
    for(var i = 1; i <= numberOfBallons; i++) {

        var balloon = document.createElement("img");
        balloon.src = 'images/small_blue_balloon.png';

        document.getElementById('scene').appendChild(balloon);
    }
}