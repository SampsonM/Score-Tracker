//players button press to add to score
let p1Button = document.getElementById('p1Button');
let p2Button = document.getElementById('p2Button');

//the score that is displayed
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');

//score tracker
let p1Score = 0;
let p2Score = 0;

//reset button
let resetButton = document.getElementById('reset');

//user defined win score
let winningScore = 5;
let gameOver = false;

//sets user defined max score
let userLimit = document.getElementById('userLimit');
let limit = document.getElementById('limit');

//winner box variables
let winnerBox = document.getElementById('winnerBox');
let winnerText = document.getElementById('winnerText');

//typeWriter effect
let txt = "Input the max score!";
let i = 0;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("input-limit-text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
    };
};

//p1 button
p1Button.addEventListener("click", function() {
    if (gameOver && p2Score === winningScore) showBox('Player 2 won.. reset game...');
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            p1.classList.add('winner');
            gameOver = true;
            showBox("Player 1 wins!!");
        }
    } p1.textContent = p1Score;
});

//p2 button
p2Button.addEventListener("click", function() {
    if (gameOver && p1Score === winningScore) showBox('Player 1 won.. reset game...');
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            p2.classList.add('winner');
            gameOver = true;
            showBox("Player 2 wins!!");
        }
    } p2.textContent = p2Score;
});

//reset button
resetButton.addEventListener("click", function(){
    reset();
});

//reset function
function reset () {
    p1Score = 0;
    p1.textContent = p1Score;
    p1.classList.remove("winner"); 
    p2Score = 0;
    p2.textContent = p2Score;
    p2.classList.remove("winner");
    gameOver = false;
    winnerBox.style.visibility = "hidden";
};

//max score function also resets score on change
userLimit.addEventListener("change", function() {
    limit.textContent = Math.abs(this.value);
    winningScore = Math.abs(Number(this.value));
    reset();
});

//show winner text box function
function showBox(text) {
    winnerBox.style.visibility = "visible";
    winnerText.textContent = text;
}
