function addToDisplay(value) {
    var display = document.getElementById('display');
    var lastChar = display.value.charAt(display.value.length - 1);

    if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/' || lastChar === '.') {
        if (value === '+' || value === '-' || value === '*' || value === '/' || value === '.') {
            return;
        }
    }
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function clearDisplayAC() {
    var display = document.getElementById('display');
    var currentValue = display.value;

    if (currentValue !== '') {
        display.value = currentValue.slice(0, -1);
    } else {
        clearDisplay();
    }
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

var hasTurnedOff = true;
const calculator = document.getElementById("calculator");


function toggleDarkMode() {

    if (hasTurnedOff) {
        calculator.classList.remove("light-mode");
        calculator.classList.add("dark-mode");
    }
    else {
        calculator.classList.remove("dark-mode");
        calculator.classList.add("light-mode");
    }

    hasTurnedOff = !hasTurnedOff;

}

function Percent() {
    var display = document.getElementById('display');
    display.value = parseFloat(display.value) / 100;
}
