function startGame() {
    var levelGame = document.getElementById('level').value;

    window.location.href = 'game.html?' + levelGame;
}