window.addEventListener('load', function() {
    var loadingScreen = document.getElementById('loading-screen');
    var quizContainer = document.getElementById('quiz-container');

    setTimeout(function() {
        loadingScreen.style.opacity = 0;
        loadingScreen.style.pointerEvents = 'none';

        setTimeout(function() {
            loadingScreen.style.display = 'none';
            quizContainer.style.display = 'block';
            
            setTimeout(function() {
                quizContainer.classList.add('visible');
            }, 50);
        }, 1500);
    }, 3000); 
});


var quizForm = document.getElementById('quizForm');
var resultDiv = document.getElementById('result');

var correctAnswers = {
    q1: 'b',
    q2: 'b',
    q3: 'a'
};

function checkAnswers() {
    var userScore = 0;
    var formData = new FormData(quizForm);

    for (var pair of formData.entries()) {
        var questionName = pair[0];
        var userAnswer = pair[1].trim().toLowerCase();
        if (correctAnswers[questionName] === userAnswer) {
            userScore += 1;
        }
    }

    resultDiv.textContent = 'You got ' + userScore + ' out of 3 correct! 🦇';
}

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    checkAnswers();
});