var gameController = (function() {
    var gameData = {
        flags: {
            // 'afghanistan': 'Afghanistan.png',
            // 'albania': 'Albania.png',
            // 'algeria': 'Algeria.png',
            // 'american samoa': 'American_Samoa.png',
            // 'andorra': 'Andorra.png',
            // 'angola': 'Angola.png',
            // 'anguilla': 'Anguilla.png',
            // 'antigua and barbuda': 'Antigua_and_Barbuda.png',
            // 'argentina': 'Argentina.png',
            // 'armenia': 'Armenia.png',
            'aruba': 'Aruba.png',
            // 'australia': 'Australia.png'
        },
        flagNames: [],
        flagSrcs: [],
        index: 0,
        currentQuestion: {
            flagName: 'not set',
            flagSrc: 'not set '
        },
        score: 0
    }

    var randomIndex = function(list) {
        var len = list.length;
        return Math.floor(Math.random() * len);
    }

    return {
        getCurrentQuestion: function() {
            return gameData.currentQuestion;
        },
        setNextQuestion: function() {
            var index = randomIndex(gameData.flagNames);
            gameData.index = index;
            gameData.currentQuestion.flagName = gameData.flagNames[index];
            gameData.currentQuestion.flagSrc = gameData.flagSrcs[index];
        },
        setUpQuestions: function() {
            gameData.flagNames = Object.keys(gameData.flags);
            gameData.flagSrcs = Object.values(gameData.flags);
        },
        incrementScore: function() {
            gameData.score++;
        },
        getScore: function() {
            return gameData.score;
        },
        removeQuestion: function() {
            gameData.flagNames.splice(gameData.index,1);
            gameData.flagSrcs.splice(gameData.index, 1);
        },
        numQuestionsRemaining: function() {
            return gameData.flagNames.length;
        }
    }

})();

var UIController = (function() {
    var DOMStrings = {
        flag: '.flag__outline',
        flagImage: '.flag__image',
        inputBox: '.text__box',
        timer: '.timer',
        buttons: '.buttons',
        startButton: '.start__button',
        score: '.score',
        winnerMessage: '.winner',
        inputTextBox: '.enter__guess',
        questionDisplayWrapper: '.question__wrapper'

    }

    function focusInputTextBox() {
        document.querySelector(DOMStrings.inputTextBox).value = "";
        document.querySelector(DOMStrings.inputTextBox).focus();
    }

    return {
        hideQuestionDisplay: function() {
            document.querySelector(DOMStrings.questionDisplayWrapper).style.display = 'none';
        },
        showStartingGameScreen: function() {
            document.querySelector(DOMStrings.startButton).style.display = 'block';
            document.querySelector(DOMStrings.startButton).value = 'Start';
            document.querySelector(DOMStrings.score).style.display = 'none';
            document.querySelector(DOMStrings.winnerMessage).style.display = 'none';
        },
        DOMStrings: DOMStrings,
        displayQuestion: function(currentFlag) {
            document.querySelector(DOMStrings.flagImage).src = 'assets/' + currentFlag;
            focusInputTextBox();
        },
        setGameDisplay: function() {
            document.querySelector(DOMStrings.questionDisplayWrapper).style.display = 'block';
            document.querySelector(DOMStrings.startButton).style.display = 'none';
            document.querySelector(DOMStrings.winnerMessage).style.display = 'none';
            document.querySelector(DOMStrings.score).style.display = 'block';
        },
        getAnswer: function() {
           return document.querySelector(DOMStrings.inputTextBox).value.toLowerCase();
        },
        displayScore: function(score) {
            document.querySelector(DOMStrings.score).textContent = score;
        },
        displayWinner: function() {
            document.querySelector(DOMStrings.winnerMessage).style.display = 'block';
            document.querySelector(DOMStrings.timer).style.display = 'block';
            this.hideQuestionDisplay();

            document.querySelector(DOMStrings.startButton).value = 'new game';
            document.querySelector(DOMStrings.startButton).style.display = 'block';
        },
        displayTimer: function(count) {
            var minutes = Math.floor(count / 60);
            var seconds = count % 60;

            minutes = String("0" + minutes).slice(-2);
            seconds = String("0" + seconds).slice(-2);

            var countdown = minutes + ':' + seconds;
            console.log('idsjfoisjdifjsoifj')
            document.getElementById('timespan').innerHTML = countdown;
        }
    }

})();

var controller = (function(gameCtrl, UICtrl) {
    var DOMStrings = UICtrl.DOMStrings

    var num = 300;
    var t, count;
    var counter;



    function setTimer() {
        console.log(num);
        num--;
        UICtrl.displayTimer(num);
        counter = setTimeout(setTimer, 1000);
    };


    function timerPause() {
        clearTimeout(counter);
    }

    function timerReset() {
        timerPause();
        num = 300;
        UICtrl.displayTimer(num);
    };

    function finishGame() {
        UICtrl.displayWinner();
        timerReset();
    }

    function setUpNextQuestion() {
        gameCtrl.setNextQuestion();
        var qs = gameCtrl.getCurrentQuestion();
        // console.log(qs.flagName);
        UICtrl.displayQuestion(qs.flagSrc);
        UICtrl.displayScore(gameCtrl.getScore());
    }

    function reset() {
        timerReset();
        UICtrl.hideQuestionDisplay();
        UICtrl.showStartingGameScreen();
    }

    var setUpEventListeners = function() {
        document.addEventListener("keypress", function() {
            if (event.keyCode == 13 || event.which == 13) {
                var ans = UICtrl.getAnswer();
                if (ans === gameCtrl.getCurrentQuestion().flagName) {
                    gameCtrl.incrementScore();
                    var score = gameCtrl.getScore();
                    if (gameCtrl.numQuestionsRemaining() === 1) {
                        console.log('winner');
                        finishGame();
                    }

                    gameCtrl.removeQuestion();
                    setUpNextQuestion();
                }

            }
        });

        document.querySelector(DOMStrings.startButton).addEventListener('click', function () {
            setTimer();
            gameCtrl.setUpQuestions();
            UICtrl.setGameDisplay();
            setUpNextQuestion()
        });

        document.getElementById('pause').addEventListener('click', timerPause);
        document.getElementById('skip').addEventListener('click', setUpNextQuestion);
        document.getElementById('reset').addEventListener('click', reset);
    };



    return {
        init: function() {
            UICtrl.hideQuestionDisplay();
            UICtrl.showStartingGameScreen();
            setUpEventListeners()
        }
    }
})(gameController, UIController);

controller.init();