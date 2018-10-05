flags = {
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
    'australia': 'Australia.png'
}

var index, allCountries, allFlags, currentCountry, currentFlag;

var score;

var CCOUNT = 300; // 5 minutes
    
var t, count;

var setUpEventListeners = function() {
    document.addEventListener("keypress", function() {
        if (event.keyCode == 13 || event.which == 13) {
            game();
        }
    });
    document.querySelector('.start__button').addEventListener('click', function () {
        setUp();
    
        setGameDisplay();
        
    });
};

function setGameDisplay() {
    document.querySelector('.text__box').style.display = 'block';
    document.querySelector('.timer').style.display = 'block';
    document.querySelector('.start__button').style.display = 'none';
    document.querySelector('.winner').style.display = 'none';
    document.querySelector('.flag__outline').style.display = 'block';
    document.querySelector('.enter__guess').focus();
    document.querySelector('.buttons').style.display = 'block';
    document.querySelector('.score').style.display = 'block';
    
    score = 0;
    document.querySelector('.score').textContent = score;
    focusInputTextBox()
}

function setUp() {
    allCountries = Object.keys(flags);
    allFlags = Object.values(flags);
    nextQuestion();
}

function reset() {
    timerReset();
    init();
}

function skip() {
    nextQuestion() // prevent next question from being same flag
    focusInputTextBox()

}

function displayTimer() {
    var minutes = Math.floor(count / 60);
    var seconds = count % 60;
    
    minutes = String("0" + minutes).slice(-2);
    seconds = String("0" + seconds).slice(-2);
    
    var countdown = minutes + ':' + seconds;

    document.getElementById('timespan').innerHTML = countdown;
};

function countdown() {
    displayTimer();
    if (count == 0) {
        console.log('time is up')
        // TODO
    } else {
        count--;
        t = setTimeout("countdown()", 1000);
    }
};

function timerPause() {
    clearTimeout(t);
};

function timerReset() {
    timerPause();
    count = CCOUNT;
    displayTimer();
};


function game() {
    var correct = checkGuess();
    if (correct) {
        score++;
        document.querySelector('.score').textContent = score;
        if (allCountries.length === 1) {
            console.log('winner');
            finishGame();
        } else {
            focusInputTextBox()

            removeCountry();
            nextQuestion();

        }   
    }
};

function finishGame() {
    document.querySelector('.winner').style.display = 'block';
    hideQuestionDisplay()
    timerReset();

    document.querySelector('.start__button').value = 'new game';
    document.querySelector('.start__button').style.display = 'block';
}

function hideQuestionDisplay() {
    document.querySelector('.flag__outline').style.display = 'none';
    document.querySelector('.text__box').style.display = 'none';
    document.querySelector('.timer').style.display = 'none';
    document.querySelector('.buttons').style.display = 'none';
}

function nextQuestion(){
    index  = randomIndex(allCountries);
    currentCountry = allCountries[index];
    currentFlag = allFlags[index];
    document.querySelector('.flag__image').src = 'assets/' + currentFlag
}

function checkGuess() {
    var ans = document.querySelector('.enter__guess').value.toLowerCase();
    return ans === currentCountry ?  true :  false;
}

function focusInputTextBox() {
    document.querySelector('.enter__guess').value = "";
    document.querySelector('.enter__guess').focus();
}

function removeCountry() {
    allCountries.splice(index,1);
    allFlags.splice(index, 1);
}

function randomIndex(list) {
    var len = list.length;
    return Math.floor(Math.random() * len);
}

function init() {
    hideQuestionDisplay()
    
    document.querySelector('.start__button').style.display = 'block';
    document.querySelector('.start__button').value = 'Start';
    document.querySelector('.score').style.display = 'none';
    document.querySelector('.winner').style.display = 'none';
    
    setUpEventListeners();
}

init();