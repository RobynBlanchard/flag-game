var gameController = (function() {
  var gameData = {
    flags: [
      {
        question: 'afghanistan.png',
        answers: ['afghanistan']
      },
      {
        question: 'albania.png',
        answers: ['albania']
      },
      {
        question: 'algeria.png',
        answers: ['algeria']
      },
      {
        question: 'andorra.png',
        answers: ['andorra']
      },
      {
        question: 'angola.png',
        answers: ['angola']
      },
      {
        question: 'antigua_and_barbuda.png',
        answers: ['antigua and barbuda', 'antigua & barbuda']
      },
      {
        question: 'argentina.png',
        answers: ['argentina']
      },
      {
        question: 'armenia.png',
        answers: ['armenia']
      },
      {
        question: 'australia.png',
        answers: ['australia']
      },
      {
        question: 'austria.png',
        answers: ['austria']
      },
      {
        question: 'azerbaijan.png',
        answers: ['azerbaijan']
      },
      {
        question: 'bahamas.png',
        answers: ['bahamas']
      },
      {
        question: 'bahrain.png',
        answers: ['bahrain']
      },
      {
        question: 'bangladesh.png',
        answers: ['bangladesh']
      },
      {
        question: 'barbados.png',
        answers: ['barbados']
      },
      {
        question: 'belarus.png',
        answers: ['belarus']
      },
      {
        question: 'belgium.png',
        answers: ['belgium']
      },
      {
        question: 'belize.png',
        answers: ['belize']
      },
      {
        question: 'benin.png',
        answers: ['benin']
      },
      {
        question: 'bhutan.png',
        answers: ['bhutan']
      },
      {
        question: 'bolivia.png',
        answers: ['bolivia']
      },
      {
        question: 'bosnia_and_herzegovina.png',
        answers: ['bosnia and herzegovina', 'bosnia & herzegovina']
      },
      {
        question: 'botswana.png',
        answers: ['botswana']
      },
      {
        question: 'brazil.png',
        answers: ['brazil']
      },
      {
        question: 'brunei.png',
        answers: ['brunei']
      },
      {
        question: 'bulgaria.png',
        answers: ['bulgaria']
      },
      {
        question: 'burkina_faso.png',
        answers: ['burkina faso']
      },
      {
        question: 'burundi.png',
        answers: ['burundi']
      },
      {
        question: 'cambodia.png',
        answers: ['cambodia']
      },
      {
        question: 'cameroon.png',
        answers: ['cameroon']
      },
      {
        question: 'canada.png',
        answers: ['canada']
      },
      {
        question: 'cape_verde.png',
        answers: ['cape verde']
      },
      {
        question: 'central_african_republic.png',
        answers: ['central african republic']
      },
      {
        question: 'chad.png',
        answers: ['chad']
      },
      {
        question: 'chile.png',
        answers: ['chile']
      },
      {
        question: 'china.png',
        answers: ['china']
      },
      {
        question: 'colombia.png',
        answers: ['colombia']
      },
      {
        question: 'comoros.png',
        answers: ['comoros']
      },
      {
        question: 'congo.png',
        answers: ['congo']
      },
      {
        question: 'costa_rica.png',
        answers: ['costa rica']
      },
      {
        question: 'côte_d\'Ivoire.png',
        answers: ['côte d\'ivoire', 'cote d-ivoire', 'côte d-ivoire', 'cote d\'ivore']
      },
      {
        question: 'croatia.png',
        answers: ['croatia']
      },
      {
        question: 'cuba.png',
        answers: ['cuba']
      },
      {
        question: 'cyprus.png',
        answers: ['cyprus']
      },
      {
        question: 'czech_republic.png',
        answers: ['czech republic', 'czechoslovakia', 'czechia']
      },
      {
        question: 'democratic_republic_of_the_congo.png',
        answers: ['democratic republic of the congo', 'dr congo', 'drc', 'droc', 'congo-kinshasa', 'east congo', 'the congo']
      },
      {
        question: 'denmark.png',
        answers: ['denmark']
      },
      {
        question: 'djibouti.png',
        answers: ['djibouti']
      },
      {
        question: 'dominica.png',
        answers: ['dominica']
      },
      {
        question: 'dominican_republic.png',
        answers: ['dominican republic']
      },
      {
        question: 'ecuador.png',
        answers: ['ecuador']
      },
      {
        question: 'egypt.png',
        answers: ['egypt']
      },
      {
        question: 'el_salvador.png',
        answers: ['el salvador']
      },
      {
        question: 'equitorial_guinea.png',
        answers: ['equitorial guinea']
      },
      {
        question: 'eritrea.png',
        answers: ['eritrea']
      },
      {
        question: 'estonia.png',
        answers: ['estonia']
      },
      {
        question: 'ethiopia.png',
        answers: ['ethiopia']
      },
      {
        question: 'fiji.png',
        answers: ['fiji']
      },
      {
        question: 'finland.png',
        answers: ['finland']
      },
      {
        question: 'france.png',
        answers: ['france']
      },
      {
        question: 'gabon.png',
        answers: ['gabon']
      },
      {
        question: 'gambia.png',
        answers: ['gambia', 'the gambia']
      },
      {
        question: 'georgia.png',
        answers: ['georgia']
      },
      {
        question: 'germany.png',
        answers: ['germany']
      },
      {
        question: 'ghana.png',
        answers: ['ghana']
      },
      {
        question: 'greece.png',
        answers: ['greece']
      },
      {
        question: 'grenada.png',
        answers: ['grenada']
      },
      {
        question: 'guatemala.png',
        answers: ['guatemala']
      },
      {
        question: 'guinea_bissau.png',
        answers: ['guinea bissau', 'guinea-bissau']
      },
      {
        question: 'guinea.png',
        answers: ['guinea']
      },
      {
        question: 'guyana.png',
        answers: ['guyana']
      },
      {
        question: 'haiti.png',
        answers: ['haiti']
      },
      {
        question: 'honduras.png',
        answers: ['honduras']
      },
      {
        question: 'hungary.png',
        answers: ['hungary']
      },
      {
        question: 'iceland.png',
        answers: ['iceland']
      },
      {
        question: 'india.png',
        answers: ['india']
      },
      {
        question: 'indonesia.png',
        answers: ['indonesia']
      },
      {
        question: 'iran.png',
        answers: ['iran']
      },
      {
        question: 'iraq.png',
        answers: ['iraq']
      },
      {
        question: 'ireland.png',
        answers: ['ireland', 'republic of ireland']
      },
      {
        question: 'israel.png',
        answers: ['israel']
      },
      {
        question: 'italy.png',
        answers: ['italy']
      },
      {
        question: 'jamaica.png',
        answers: ['jamaica']
      },
      {
        question: 'japan.png',
        answers: ['japan']
      },
      {
        question: 'jordan.png',
        answers: ['jordan']
      },
      {
        question: 'kazakhstan.png',
        answers: ['kazakhstan']
      },
      {
        question: 'kenya.png',
        answers: ['kenya']
      },
      {
        question: 'kiribati.png',
        answers: ['kiribati']
      },
      {
        question: 'kosovo.png',
        answers: ['kosovo']
      },
      {
        question: 'kuwait.png',
        answers: ['kuwait']
      },
      {
        question: 'kyrgyzstan.png',
        answers: ['kyrgyzstan']
      },
      {
        question: 'laos.png',
        answers: ['laos', 'lao people\'s democratic republic']
      },
      {
        question: 'latvia.png',
        answers: ['latvia']
      },
      {
        question: 'lebanon.png',
        answers: ['lebanon']
      },
      {
        question: 'lesotho.png',
        answers: ['lesotho']
      },
      {
        question: 'liberia.png',
        answers: ['liberia']
      },
      {
        question: 'libya.png',
        answers: ['libya']
      },
      {
        question: 'liechtenstein.png',
        answers: ['liechtenstein']
      },
      {
        question: 'lithuania.png',
        answers: ['lithuania']
      },
      {
        question: 'luxemborg.png',
        answers: ['luxemborg']
      },
      {
        question: 'macedonia.png',
        answers: ['macedonia', 'republic of north macedonia', 'north macedonia']
      },
      {
        question: 'madagascar.png',
        answers: ['madagascar', 'the republic of madagascar', 'republic of madagascar']
      },
      {
        question: 'malawi.png',
        answers: ['malawi']
      },
      {
        question: 'malaysia.png',
        answers: ['malaysia']
      },
      {
        question: 'maldives.png',
        answers: ['maldives']
      },
      {
        question: 'mali.png',
        answers: ['mali']
      },
      {
        question: 'malta.png',
        answers: ['malta']
      },
      {
        question: 'marshall_islands.png',
        answers: ['marshall islands']
      },
      {
        question: 'mauritiana.png',
        answers: ['mauritiana', 'islamic republic of mauritania', 'the islamic republic of mauritania']
      },
      {
        question: 'mauritius.png',
        answers: ['mauritius']
      },
      {
        question: 'mexico.png',
        answers: ['mexico']
      },
      {
        question: 'micronesia.png',
        answers: ['micronesia', 'federated states of micronesia']
      },
      {
        question: 'moldova.png',
        answers: ['moldova']
      },
      {
        question: 'monaco.png',
        answers: ['monaco']
      },
      {
        question: 'mongolia.png',
        answers: ['mongolia']
      },
      {
        question: 'montenegro.png',
        answers: ['montenegro']
      },
      {
        question: 'morocco.png',
        answers: ['morocco']
      },
      {
        question: 'mozambique.png',
        answers: ['mozambique']
      },
      {
        question: 'myanmar.png',
        answers: ['myanmar']
      },
      {
        question: 'namibia.png',
        answers: ['namibia']
      },
      {
        question: 'nauru.png',
        answers: ['nauru']
      },
      {
        question: 'nepal.png',
        answers: ['nepal']
      },
      {
        question: 'netherlands.png',
        answers: ['netherlands', 'holland']
      },
      {
        question: 'new_zealand.png',
        answers: ['new zealand']
      },
      {
        question: 'nicaragua.png',
        answers: ['nicaragua']
      },
      {
        question: 'niger.png',
        answers: ['niger', 'republic of the niger', 'the republic of the niger']
      },
      {
        question: 'nigeria.png',
        answers: ['nigeria']
      },
      {
        question: 'north_korea.png',
        answers: ['north korea', 'democratic people\'s republic of korea']
      },
      {
        question: 'norway.png',
        answers: ['norway']
      },
      {
        question: 'oman.png',
        answers: ['oman']
      },
      {
        question: 'pakistan.png',
        answers: ['pakistan']
      },
      {
        question: 'palau.png',
        answers: ['palau']
      },
      {
        question: 'panama.png',
        answers: ['panama']
      },
      {
        question: 'papa_new_guinea.png',
        answers: ['papa new guinea']
      },
      {
        question: 'paraguay.png',
        answers: ['paraguay']
      },
      {
        question: 'peru.png',
        answers: ['peru']
      },
      {
        question: 'philippines.png',
        answers: ['philippines']
      },
      {
        question: 'poland.png',
        answers: ['poland']
      },
      {
        question: 'portugal.png',
        answers: ['portugal']
      },
      {
        question: 'qatar.png',
        answers: ['qatar']
      },
      {
        question: 'romania.png',
        answers: ['romania']
      },
      {
        question: 'russia.png',
        answers: ['russia']
      },
      {
        question: 'rwanda.png',
        answers: ['rwanda']
      },
      {
        question: 'sahwari_arab_democratic_republic.png',
        answers: ['sahwari arab democratic republic', 'sahrawi republic']
      },
      {
        question: 'saint_kitts_and_nevis.png',
        answers: ['saint kitts and nevis', 'st kitts and nevis']
      },
      {
        question: 'saint_lucia.png',
        answers: ['saint lucia', 'st lucia']
      },
      {
        question: 'samoa.png',
        answers: ['samoa']
      },
      {
        question: 'san_marino.png',
        answers: ['san marino']
      },
      {
        question: 'sao_tome_and_principe.png',
        answers: ['sao tome and principe']
      },
      {
        question: 'saudi_arabia.png',
        answers: ['saudi arabia']
      },
      {
        question: 'senegal.png',
        answers: ['senegal']
      },
      {
        question: 'serbia.png',
        answers: ['serbia']
      },
      {
        question: 'seychelles.png',
        answers: ['seychelles']
      },
      {
        question: 'sierra_leone.png',
        answers: ['sierra leone']
      },
      {
        question: 'singapore.png',
        answers: ['singapore']
      },
      {
        question: 'slovakia.png',
        answers: ['slovakia']
      },
      {
        question: 'slovenia.png',
        answers: ['slovenia']
      },
      {
        question: 'solomon_islands.png',
        answers: ['solomon islands']
      },
      {
        question: 'somalia.png',
        answers: ['somalia']
      },
      {
        question: 'south_africa.png',
        answers: ['south africa']
      },
      {
        question: 'south_korea.png',
        answers: ['south korea']
      },
      {
        question: 'spain.png',
        answers: ['spain']
      },
      {
        question: 'sri_lanka.png',
        answers: ['sri lanka']
      },
      {
        question: 'sudan.png',
        answers: ['sudan']
      },
      {
        question: 'suriname.png',
        answers: ['suriname']
      },
      {
        question: 'swaziland.png',
        answers: ['swaziland']
      },
      {
        question: 'sweden.png',
        answers: ['sweden']
      },
      {
        question: 'switzerland.png',
        answers: ['switzerland']
      },
      {
        question: 'syria.png',
        answers: ['syria']
      },
      {
        question: 'taiwan.png',
        answers: ['taiwan']
      },
      {
        question: 'tajikistan.png',
        answers: ['tajikistan']
      },
      {
        question: 'tanzania.png',
        answers: ['tanzania']
      },
      {
        question: 'thailand.png',
        answers: ['thailand']
      },
      {
        question: 'timor_leste.png',
        answers: ['timor leste']
      },
      {
        question: 'togo.png',
        answers: ['togo']
      },
      {
        question: 'tonga.png',
        answers: ['tonga']
      },
      {
        question: 'trinidad_and_tobago.png',
        answers: ['trinidad and tobago']
      },
      {
        question: 'tunisia.png',
        answers: ['tunisia']
      },
      {
        question: 'turkey.png',
        answers: ['turkey']
      },
      {
        question: 'turkmenistan.png',
        answers: ['turkmenistan']
      },
      {
        question: 'tuvalu.png',
        answers: ['tuvalu']
      },
      {
        question: 'uganda.png',
        answers: ['uganda']
      },
      {
        question: 'ukraine.png',
        answers: ['ukraine']
      },
      {
        question: 'united_arab_emirates.png',
        answers: ['united arab emirates', 'uae']
      },
      {
        question: 'united_kingdom.png',
        answers: ['united kingdom', 'uk']
      },
      {
        question: 'united_states_of_america.png',
        answers: ['united states of america', 'usa']
      },
      {
        question: 'uruguay.png',
        answers: ['uruguay']
      },
      {
        question: 'uzebekistan.png',
        answers: ['uzebekistan']
      },
      {
        question: 'vanuatu.png',
        answers: ['vanuatu']
      },
      {
        question: 'vatican_city.png',
        answers: ['vatican city']
      },
      {
        question: 'venezuela.png',
        answers: ['venezuela']
      },
      {
        question: 'vietnam.png',
        answers: ['vietnam']
      },
      {
        question: 'vincent_and_the_grenadines.png',
        answers: ['saint vincent and the grenadines', 'st vincent and the grenadines']
      },
      {
        question: 'yemen.png',
        answers: ['yemen']
      },
      {
        question: 'zambia.png',
        answers: ['zambia']
      },
      {
        question: 'zimbabwe.png',
        answers: ['zimbabwe']
      },
    ],
    flagsCopy: [],
    index: 0,
    currentQuestion: {},
    score: 0
  };

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
      gameData.currentQuestion = gameData.flags[index];
    },
    setUpQuestions: function() {
      gameData.flagsCopy = nestedCopy(gameData.flags);
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
    UICtrl.showStartingGameScreen();
  }

  var setUpEventListeners = function() {
    document.addEventListener('keypress', function() {
      if (event.keyCode == 13 || event.which == 13) {
        var ans = UICtrl.getAnswer();
        if (gameCtrl.getCurrentQuestion().answers.indexOf(ans) === 0) {
          gameCtrl.incrementScore();
          var score = gameCtrl.getScore();
          if (gameCtrl.numQuestionsRemaining() === 1) {
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
