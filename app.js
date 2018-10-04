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

var setUpEventListeners = function() {
    // document.querySelector('.button').addEventListener('click', game);

    document.addEventListener("keypress", function() {
        if (event.keyCode == 13 || event.which == 13) {
            game();
        }
    });
};

init();

function init() {
    allCountries = Object.keys(flags)
    allFlags = Object.values(flags)
    index = randomIndex(allCountries);
    currentCountry = allCountries[index];
    currentFlag = allFlags[index];

    document.querySelector('.flag__image').src = 'assets/' + currentFlag

    setUpEventListeners();
}




function game() {
    var correct = checkGuess();
    if (correct) {
        if (allCountries.length === 1) {
            console.log('winner');
        } else {
            document.querySelector('.enter__guess').value = "";
            document.querySelector('.enter__guess').focus();

            removeCountry();
            nextQuestion();

        }   
    }
};

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

