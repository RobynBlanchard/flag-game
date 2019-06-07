var gameController = (function() {
  var gameData = {
    flags: {
      'afghanistan': 'Afghanistan.png',
      'albania': 'Albania.png',
      'algeria': 'Algeria.png',
      'american samoa': 'American_Samoa.png',
      'andorra': 'Andorra.png',
      'angola': 'Angola.png',
      'anguilla': 'Anguilla.png',
      'antigua and barbuda': 'Antigua_and_Barbuda.png',
      'argentina': 'Argentina.png',
      'armenia': 'Armenia.png',
      'aruba': 'Aruba.png',
      'australia': 'Australia.png',
      'austria': 'Austria.png',
      'azerbaijan': 'Azerbaijan.png',
      'bahamas': 'Bahamas.png',
      'bahrain': 'Bahrain.png',
      'bangladesh': 'Bangladesh.png',
      'barbados': 'Barbados.png',
      'belarus': 'Belarus.png',
      'benin': 'Benin.png',
      'bermuda': 'Bermuda.png',
      'bhutan': 'Bhutan.png',
      'bolivia': 'Bolivia.png',
      'bosnia': 'Bosnia.png',
      'botswana': 'Botswana.png',
      'brazil': 'Brazil.png',
      'british virgin islands': 'British_Virgin_Islands.png',
      'brunei': 'Brunei.png',
      'bulgaria': 'Bulgaria.png',
      'burkina_Faso': 'Burkina_Faso.png',
      'burundi': 'Burundi.png',
      'cambodia': 'Cambodia.png',
      'cameroon': 'Cameroon.png',
      'canada': 'Canada.png',
      'cape verde': 'Cape_Verde.png',
      'cayman islands': 'Cayman_Islands.png',
      'central african republic': 'Central_African_Republic.png',
      'chad': 'Chad.png',
      'chile': 'Chile.png',
      'china': 'China.png',
      'christmas island': 'Christmas_Island.png',
      'colombia': 'Colombia.png',
      'comoros': 'Comoros.png',
      'cook islands': 'Cook_Islands.png',
      'costa rica': 'Costa_Rica.png',
      'Côte d\'Ivoire': 'Côte_d\'Ivoire.png',
      'croatia': 'Croatia.png',
      'cuba': 'Cuba.png',
      'cyprus': 'Cyprus.png',
      'czech republic': 'Czech_Republic.png',
    },
    flagNames: [],
    flagSrcs: [],
    index: 0,
    currentQuestion: {
      flagName: '',
      flagSrc: ' '
    },
    score: 0
  };

  var randomIndex = function(list) {
    var len = list.length;
    return Math.floor(Math.random() * len);
  };

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
    getTotalNumQuestions: function() {
        return Object.keys(gameData.flags).length;
    },
    removeQuestion: function() {
      gameData.flagNames.splice(gameData.index, 1);
      gameData.flagSrcs.splice(gameData.index, 1);
    },
    numQuestionsRemaining: function() {
      return gameData.flagNames.length;
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
    inputTextBox: '.text__box__input',
    questionDisplayWrapper: '.question__wrapper',
    pauseButton: '#pause',
    resumeButton: '#resume',
    skipButton: '#skip',
    gameStatsWrapper: '.game__stats__wrapper'
  };

  function focusInputTextBox() {
    document.querySelector(DOMStrings.inputTextBox).value = '';
    document.querySelector(DOMStrings.inputTextBox).focus();
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
    },
    displayQuestion: function(currentFlag) {
      document.querySelector(DOMStrings.flagImage).src =
        'assets/' + currentFlag;
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
      document.querySelector(DOMStrings.endMessage).innerText = text;
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
    var num = 300;
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
    UICtrl.displayEndOfGame(playerDidWin);
    timertwo.reset();
  }

  function setUpNextQuestion() {
    gameCtrl.setNextQuestion();
    var qs = gameCtrl.getCurrentQuestion();
    UICtrl.displayQuestion(qs.flagSrc);
    UICtrl.displayScore(gameCtrl.getScore(), gameCtrl.getTotalNumQuestions());
  }

  function reset() {
    timerReset();
    UICtrl.showStartingGameScreen();
  }

  var setUpEventListeners = function() {
    document.addEventListener('keypress', function() {
      if (event.keyCode == 13 || event.which == 13) {
        var ans = UICtrl.getAnswer();
        if (ans === gameCtrl.getCurrentQuestion().flagName) {
          gameCtrl.incrementScore();
          var score = gameCtrl.getScore();
          if (gameCtrl.numQuestionsRemaining() === 1) {
            console.log('winner');
            finishGame(true);
          }

          gameCtrl.removeQuestion();
          setUpNextQuestion();
        }
      }
    });

    document
      .querySelector(DOMStrings.startButton)
      .addEventListener('click', function() {
        setTimer();
        gameCtrl.setUpQuestions();
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
