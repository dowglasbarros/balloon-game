var timerId = null; // Variável que armazena a chamada da função timeout

function startGame() {
    var url = window.location.search;
    var levelGame = url.replace('?', '');
    var seconds = 0;

    if (levelGame == 1) {
        seconds = 120;
    }

    if (levelGame == 2) {
        seconds = 60;
    }

    if (levelGame == 3) {
        seconds = 30;
    }

    // Inserindo segundos no span
    document.getElementById('timer').innerHTML = seconds;

    // Quantidade de balões
    var numberOfBallons = 80;

    createBallons(numberOfBallons);

    // Imprimir quantidade de balões
    document.getElementById('full').innerHTML = numberOfBallons;
    document.getElementById('exploded').innerHTML = 0;

    timeCounting(seconds + 1);
}

function timeCounting(seconds) {
    seconds = seconds - 1;

    if (seconds == -1) {
        clearTimeout(timerId); // Para a execução da função do setTimeout
        gameOver();
        return false;
    }

    document.getElementById('timer').innerHTML = seconds;

    timerId = setTimeout("timeCounting(" + seconds + ")", 1000);
}

function gameOver() {
    alert('Fim de jogo! Você não conseguiu estourar todos os balões a tempo, tente novamente!');
}

function createBallons(numberOfBallons) {
    for (var i = 1; i <= numberOfBallons; i++) {

        var balloon = document.createElement('img');
        balloon.src = 'images/small_blue_balloon.png';
        balloon.id = 'b' + i;

        balloon.onclick = function () {
            explode(this);
        };

        document.getElementById('scene').appendChild(balloon);
    }
}

function explode(e) {
    var idBalloon = e.id;
    
    document.getElementById(idBalloon).setAttribute("onclick", "");
    document.getElementById(idBalloon).src = 'images/small_blue_balloon_exploded.png';

    score(-1);
}

function score(action) {

    var full = document.getElementById('full').innerHTML;
    var exploded = document.getElementById('exploded').innerHTML;

    full = parseInt(full);
    exploded = parseInt(exploded);

    full = full + action;
    exploded = exploded - action;

    document.getElementById('full').innerHTML = full;
    document.getElementById('exploded').innerHTML = exploded;

    gameStatus(full, exploded);
}

function gameStatus(full, exploded){
    if(full == 0){
        alert('Parabéns! Você conseguiu estourar todos os balões!');
        finishGame();
    }
}

function finishGame(){
    clearTimeout(timerId);
}