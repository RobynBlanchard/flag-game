var gameController = (function() {
  var gameData = {
    flags: {
      'albania':'albania.png',
      'algeria':'algeria.png',
      'andorra':'andorra.png',
      'angola':'angola.png',
      'antigua and barbuda':'antigua_and_barbuda.png',
      'argentina':'argentina.png',
      'armenia':'armenia.png',
      'australia':'australia.png',
      'austria':'austria.png',
      'azerbaijan':'azerbaijan.png',
      'bahamas':'bahamas.png',
      'bahrain':'bahrain.png',
      'bangladesh':'bangladesh.png',
      'barbados':'barbados.png',
      'belarus':'belarus.png',
      'belgium':'belgium.png',
      'belize':'belize.png',
      'benin':'benin.png',
      'bhutan':'bhutan.png',
      'bolivia':'bolivia.png',
      'bosnia and herzegovina':'bosnia_and_herzegovina.png',
      'botswana':'botswana.png',
      'brazil':'brazil.png',
      'brunei':'brunei.png',
      'bulgaria':'bulgaria.png',
      'burkino faso':'burkino_faso.png',
      'burundi':'burundi.png',
      'cambodia':'cambodia.png',
      'cameroon':'cameroon.png',
      'canada':'canada.png',
      'cape verde':'cape_verde.png',
      'central african republic':'central_african_republic.png',
      'chad':'chad.png',
      'chile':'chile.png',
      'china':'china.png',
      'colombia':'colombia.png',
      'comoros':'comoros.png',
      'congo':'congo.png',
      'costa rica':'costa_rica.png',
      'côte_d\'Ivoire':'côte_d\'Ivoire.png',
      'croatia':'croatia.png',
      'cuba':'cuba.png',
      'cyprus':'cyprus.png',
      'czech_republic':'czech_republic.png',
      'democratic republic of the congo':'democratic_republic_of_the_congo.png',
      'denmark':'denmark.png',
      'djibouti':'djibouti.png',
      'dominica':'dominica.png',
      'dominican republic':'dominican_republic.png',
      'ecuador':'ecuador.png',
      'egypt':'egypt.png',
      'el salvador':'el_salvador.png',
      'equitorial_guinea':'equitorial_guinea.png',
      'eritrea':'eritrea.png',
      'estonia':'estonia.png',
      'ethiopia':'ethiopia.png',
      'fiji':'fiji.png',
      'finland':'finland.png',
      'france':'france.png',
      'gabon':'gabon.png',
      'gambia':'gambia.png',
      'georgia':'georgia.png',
      'germany':'germany.png',
      'ghana':'ghana.png',
      'greece':'greece.png',
      'grenada':'grenada.png',
      'guatemala':'guatemala.png',
      'guinea bissau':'guinea_bissau.png',
      'guinea':'guinea.png',
      'guyana':'guyana.png',
      'haiti':'haiti.png',
      'honduras':'honduras.png',
      'hungary':'hungary.png',
      'iceland':'iceland.png',
      'india':'india.png',
      'indonesia':'indonesia.png',
      'iran':'iran.png',
      'iraq':'iraq.png',
      'ireland':'ireland.png',
      'israel':'israel.png',
      'italy':'italy.png',
      'jamaica':'jamaica.png',
      'japan':'japan.png',
      'jordan':'jordan.png',
      'kazakhstan':'kazakhstan.png',
      'kenya':'kenya.png',
      'kiribati':'kiribati.png',
      'kosovo':'kosovo.png',
      'kuwait':'kuwait.png',
      'kyrgyzstan':'kyrgyzstan.png',
      'laos':'laos.png',
      'latvia':'latvia.png',
      'lebanon':'lebanon.png',
      'lesotho':'lesotho.png',
      'liberia':'liberia.png',
      'libya':'libya.png',
      'liechtenstein':'liechtenstein.png',
      'lithuania':'lithuania.png',
      'luxemborg':'luxemborg.png',
      'macedonia':'macedonia.png',
      'madagascar':'madagascar.png',
      'malawi':'malawi.png',
      'malaysia':'malaysia.png',
      'maldives':'maldives.png',
      'mali':'mali.png',
      'malta':'malta.png',
      'marshall_islands':'marshall_islands.png',
      'mauritiana':'mauritiana.png',
      'mauritius':'mauritius.png',
      'mexico':'mexico.png',
      'micronesia':'micronesia.png',
      'moldova':'moldova.png',
      'monaco':'monaco.png',
      'mongolia':'mongolia.png',
      'montenegro':'montenegro.png',
      'morocco':'morocco.png',
      'mozambique':'mozambique.png',
      'myanmar':'myanmar.png',
      'namibia':'namibia.png',
      'nauru':'nauru.png',
      'nepal':'nepal.png',
      'netherlands':'netherlands.png',
      'new zealand':'new_zealand.png',
      'nicaragua':'nicaragua.png',
      'niger':'niger.png',
      'nigeria':'nigeria.png',
      'north korea':'north_korea.png',
      'norway':'norway.png',
      'oman':'oman.png',
      'pakistan':'pakistan.png',
      'palau':'palau.png',
      'panama':'panama.png',
      'papa new guinea':'papa_new_guinea.png',
      'paraguay':'paraguay.png',
      'peru':'peru.png',
      'philippines':'philippines.png',
      'poland':'poland.png',
      'portugal':'portugal.png',
      'qatar':'qatar.png',
      'romania':'romania.png',
      'russia':'russia.png',
      'rwanda':'rwanda.png',
      'sahwari arab democratic republic':'sahwari_arab_democratic_republic.png',
      'saint kitts and nevis':'saint_kitts_and_nevis.png',
      'saint lucia':'saint_lucia.png',
      'samoa':'samoa.png',
      'san marino':'san_marino.png',
      'sao tome and principe':'sao_tome_and_principe.png',
      'saudi arabia':'saudi_arabia.png',
      'senegal':'senegal.png',
      'serbia':'serbia.png',
      'seychelles':'seychelles.png',
      'sierra leone':'sierra_leone.png',
      'singapore':'singapore.png',
      'slovakia':'slovakia.png',
      'slovenia':'slovenia.png',
      'solomon islands':'solomon_islands.png',
      'somalia':'somalia.png',
      'south africa':'south_africa.png',
      'south korea':'south_korea.png',
      'spain':'spain.png',
      'sri lanka':'sri_lanka.png',
      'sudan':'sudan.png',
      'suriname':'suriname.png',
      'swaziland':'swaziland.png',
      'sweden':'sweden.png',
      'switzerland':'switzerland.png',
      'syria':'syria.png',
      'taiwan':'taiwan.png',
      'tajikistan':'tajikistan.png',
      'tanzania':'tanzania.png',
      'thailand':'thailand.png',
      'timor leste':'timor_leste.png',
      'togo':'togo.png',
      'tonga':'tonga.png',
      'trinidad and tobago':'trinidad_and_tobago.png',
      'tunisia':'tunisia.png',
      'turkey':'turkey.png',
      'turkmenistan':'turkmenistan.png',
      'tuvalu':'tuvalu.png',
      'uganda':'uganda.png',
      'ukraine':'ukraine.png',
      'united arab emirates':'united_arab_emirates.png',
      'united kingdom':'united_kingdom.png',
      'united states of america':'united_states_of_america.png',
      'uruguay':'uruguay.png',
      'uzebekistan':'uzebekistan.png',
      'vanuatu':'vanuatu.png',
      'vatican city':'vatican_city.png',
      'venezuela':'venezuela.png',
      'vietnam':'vietnam.png',
      'saint vincent and the grenadines':'vincent_and_the_grenadines.png',
      'yemen':'yemen.png',
      'zambia':'zambia.png',
      'zimbabwe':'zimbabwe.png',
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
        'images/flags/' + currentFlag;
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
