let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function deleteLastCharacter() {
    let currentDisplay = display.value;
    display.value = currentDisplay.slice(0, -1);
}


document.addEventListener('keydown', function (event) {
    const key = event.key;

    
    if (/[\d.+\-*/]|Enter|Backspace|Delete|Escape/.test(key)) {
        event.preventDefault(); 

        
        switch (key) {
            case 'Enter':
                calculate();
                break;
            case 'Backspace':
            case 'Delete':
                deleteLastCharacter();
                break;
            case 'Escape':
                clearDisplay();
                break;
            default:
                appendToDisplay(key);
                break;
        }
    }
});
