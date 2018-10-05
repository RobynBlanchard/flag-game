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

var CCOUNT = 60;
    
var t, count;

var setUpEventListeners = function() {
    document.addEventListener("keypress", function() {
        if (event.keyCode == 13 || event.which == 13) {
            game();
        }
    });
    document.querySelector('.start__button').addEventListener('click', function () {
        document.querySelector('.text__box').style.display = 'block';
        document.querySelector('.timer').style.display = 'block';
        document.querySelector('.start__button').style.display = 'none';
        document.querySelector('.flag__outline').style.display = 'block';
        document.querySelector('.enter__guess').focus();
        document.querySelector('.buttons').style.display = 'block';
        
        
    });
};

function reset() {
    timerReset();
    init();
}

function skip() {
    nextQuestion()
    document.querySelector('.enter__guess').value = "";
    document.querySelector('.enter__guess').focus();
}

function displayTimer() {
    // displays time in span
    document.getElementById('timespan').innerHTML = count;
};

function countdown() {
    // starts countdown
    displayTimer();
    if (count == 0) {
        console.log('time is up')
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


init();

function init() {
    allCountries = Object.keys(flags)
    allFlags = Object.values(flags)
    index = randomIndex(allCountries);
    currentCountry = allCountries[index];
    currentFlag = allFlags[index];

    document.querySelector('.flag__image').src = 'assets/' + currentFlag;
    document.querySelector('.text__box').style.display = 'None';
    document.querySelector('.flag__outline').style.display = 'none';
    document.querySelector('.buttons').style.display = 'none';
    document.querySelector('.timer').style.display = 'none';
    document.querySelector('.start__button').style.display = 'block';
    // document.querySelector('.timer').value = '10.00';


    setUpEventListeners();
}


function game() {
    var correct = checkGuess();
    if (correct) {
        if (allCountries.length === 1) {
            console.log('winner');
            finishGame();
        } else {
            document.querySelector('.enter__guess').value = "";
            document.querySelector('.enter__guess').focus();

            removeCountry();
            nextQuestion();

        }   
    }
};

function finishGame() {
    // note time
    // change display
    // add to leaderboad
    // leaderboard = [{score:, time:}, {etc.}]
}



function checkGuess() {
    var ans = document.querySelector('.enter__guess').value.toLowerCase();
    return ans === currentCountry ?  true :  false;
}

function nextQuestion(){
    index  = randomIndex(allCountries);
    currentCountry = allCountries[index];
    currentFlag = allFlags[index];
    document.querySelector('.flag__image').src = 'assets/' + currentFlag
}

function removeCountry() {
    allCountries.splice(index,1);
    allFlags.splice(index, 1);
}

function randomIndex(list) {
    var len = list.length;
    return Math.floor(Math.random() * len);
}

