import flags from './flags';

var gameController = (function() {
  var gameData = {
    flags: flags,
    flagsCopy: [],
    index: 0,
    currentQuestion: {},
    score: 0
  };

  // TODO: skip - don't skip if already skipped

  var randomIndex = function(list) {
    var len = list.length;
    return Math.floor(Math.random() * len);
  };

  function nestedCopy(array) {
    return JSON.parse(JSON.stringify(array));
}

  return {
    getCurrentQuestion: function() {
      return gameData.currentQuestion;
    },
    setNextQuestion: function() {
      var index = randomIndex(gameData.flagsCopy);
      gameData.index = index;
      gameData.currentQuestion = gameData.flagsCopy[index];
    },
    setUpQuestions: function() {
      gameData.flagsCopy = nestedCopy(gameData.flags);
    },
    resetScore: function() {
      gameData.score = 0;
    },
    incrementScore: function() {
      gameData.score++;
    },
    getScore: function() {
      return gameData.score;
    },
    getTotalNumQuestions: function() {
      return gameData.flags.length;
    },
    removeQuestion: function() {
      gameData.flagsCopy.splice(gameData.index, 1);
    },
    numQuestionsRemaining: function() {
      return gameData.flagsCopy.length;
    }
  };
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
    endMessage: '.end__message',
    secondaryHeading: '.heading__secondary',
    inputTextBox: '.text__box__input',
    questionDisplayWrapper: '.question__wrapper',
    pauseButton: '#pause',
    resumeButton: '#resume',
    skipButton: '#skip',
    gameStatsWrapper: '.game__stats__wrapper'
  };

  function focusInputTextBox() {
    document.querySelector(DOMStrings.inputTextBox).value = '';

    var cursorFocus = function(elem) {
      var x = window.scrollX, y = window.scrollY;
      elem.focus();
      window.scrollTo(x, y);
    }

    cursorFocus(document.querySelector(DOMStrings.inputTextBox));
  }

  return {
    DOMStrings: DOMStrings,
    hideQuestionDisplay: function() {
      document.querySelector(DOMStrings.questionDisplayWrapper).style.display =
        'none';
    },
    showStartingGameScreen: function() {
      document.querySelector(DOMStrings.startButton).style.display = 'block';
      document.querySelector(DOMStrings.endMessage).style.display = 'none';
      document.querySelector(DOMStrings.gameStatsWrapper).style.display =
        'none';
      document.querySelector(DOMStrings.questionDisplayWrapper).style.display =
        'none';
      document.querySelector(DOMStrings.inputTextBox).disabled = false;
      document.querySelector(DOMStrings.skipButton).disabled = false;

    },
    displayQuestion: function(currentFlag) {
      document.querySelector(DOMStrings.flagImage).src =
        'images/flags/' + currentFlag.question;
      focusInputTextBox();
    },
    setGameDisplay: function() {
      document.querySelector(DOMStrings.questionDisplayWrapper).style.display =
        'block';
      document.querySelector(DOMStrings.gameStatsWrapper).style.display =
        'block';
      document.querySelector(DOMStrings.resumeButton).style.display = 'none';
      document.querySelector(DOMStrings.pauseButton).style.display = 'block';
      document.querySelector(DOMStrings.startButton).style.display = 'none';
      document.querySelector(DOMStrings.endMessage).style.display = 'none';
    },
    getAnswer: function() {
      return document
        .querySelector(DOMStrings.inputTextBox)
        .value.toLowerCase();
    },
    displayScore: function(score, totalNumOfQuestions) {
      document.querySelector(DOMStrings.score).textContent = score + '/' + totalNumOfQuestions;
    },
    displayEndOfGame: function(playDidWin) {
      var text = playDidWin ? 'winner' : 'loser - out of time';
      document.querySelector(DOMStrings.secondaryHeading).innerText = text;
      document.querySelector(DOMStrings.endMessage).style.display = 'block';
      document.querySelector(DOMStrings.questionDisplayWrapper).style.display =
        'none';
      document.querySelector(DOMStrings.startButton).value = 'new game';
      document.querySelector(DOMStrings.startButton).style.display = 'block';
    },
    displayTimer: function(count) {
      var minutes = Math.floor(count / 60);
      var seconds = count % 60;

      minutes = String('0' + minutes).slice(-2);
      seconds = String('0' + seconds).slice(-2);

      var countdown = minutes + ':' + seconds;
      document.getElementById('timespan').innerHTML = countdown;
    },
    pauseGame: function() {
      document.querySelector(DOMStrings.inputTextBox).disabled = true;
      document.querySelector(DOMStrings.skipButton).disabled = true;
      document.querySelector(DOMStrings.pauseButton).style.display = 'none';
      document.querySelector(DOMStrings.resumeButton).style.display = 'block';
    },
    resumeGame: function() {
      document.querySelector(DOMStrings.inputTextBox).disabled = false;
      document.querySelector(DOMStrings.skipButton).disabled = false;
      document.querySelector(DOMStrings.pauseButton).style.display = 'block';
      document.querySelector(DOMStrings.resumeButton).style.display = 'none';
    }
  };
})();

var controller = (function(gameCtrl, UICtrl) {
  var DOMStrings = UICtrl.DOMStrings;

  function Timer() {
    var num = 600;
    var counter;
    var paused = false;

    var setTimer = function() {
      if (paused === false) {
        if (num === 0) {
          return finishGame(false);
        }
        num--;
      }
      UICtrl.displayTimer(num);
      counter = setTimeout(setTimer, 1000);
    };

    this.pause = function() {
      paused = true;
    };

    this.resume = function() {
      paused = false;
    };

    this.reset = function() {
      clearTimeout(counter);
    };

    setTimer();
  }

  var timertwo;

  function setTimer() {
    timertwo = new Timer();
  }

  function handlePause() {
    timertwo.pause();
    UICtrl.pauseGame();
  }

  function handleResume() {
    timertwo.resume();
    UICtrl.resumeGame();

  }

  function timerReset() {
    timertwo.reset();
  }

  function finishGame(playerDidWin) {
    UICtrl.displayScore(gameCtrl.getScore(), gameCtrl.getTotalNumQuestions());
    UICtrl.displayEndOfGame(playerDidWin);
    timertwo.reset();
  }

  function setUpNextQuestion() {
    gameCtrl.setNextQuestion();
    var qs = gameCtrl.getCurrentQuestion();
    UICtrl.displayQuestion(qs);
    UICtrl.displayScore(gameCtrl.getScore(), gameCtrl.getTotalNumQuestions());
  }

  function reset() {
    timerReset();
    // score reset
    UICtrl.showStartingGameScreen();
  }

  var setUpEventListeners = function() {
    document.addEventListener('input', function() {
      var ans = UICtrl.getAnswer();
      if (gameCtrl.getCurrentQuestion().answers.indexOf(ans) !== -1) {
        gameCtrl.incrementScore();
        if (gameCtrl.numQuestionsRemaining() === 1) {
          return finishGame(true);
        }

        gameCtrl.removeQuestion();
        setUpNextQuestion();
      }
    });

    // TODO: if key press and answer is close, pop up message

    document
      .querySelector(DOMStrings.startButton)
      .addEventListener('click', function() {
        setTimer();
        gameCtrl.setUpQuestions();
        gameCtrl.resetScore();
        UICtrl.setGameDisplay();
        setUpNextQuestion();
      });

    document.getElementById('pause').addEventListener('click', handlePause);
    document.getElementById('resume').addEventListener('click', handleResume);
    document
      .getElementById('skip')
      .addEventListener('click', setUpNextQuestion);
    document.getElementById('reset').addEventListener('click', reset);
  };

  return {
    init: function() {
      UICtrl.showStartingGameScreen();
      setUpEventListeners();
    }
  };
})(gameController, UIController);

controller.init();
