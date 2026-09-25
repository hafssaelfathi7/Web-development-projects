// Select display screen and button elements
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

// Add event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        
        // Handle Clear Button (c)
        if (button.classList.contains('clear') && button.querySelector('.fa-c')) {
            display.value = '';
        } 
        
        // Handle Delete/Backspace Button
        else if (button.classList.contains('clear') && button.querySelector('.fa-delete-left')) {
            display.value = display.value.slice(0, -1);
        }
        
        // Handle Equals Button (=)
        else if (button.classList.contains('equal')) {
            calculateResult();
        }
        
        // Handle Standard Input Buttons
        else {
            let value = button.innerText.trim();

            // Translate FontAwesome icon buttons to mathematical characters
            if (button.querySelector('.fa-xmark')) value = '*';
            if (button.querySelector('.fa-plus')) value = '+';
            if (button.querySelector('.fa-minus')) value = '-';
            if (button.querySelector('.fa-divide')) value = '/';
            if (button.querySelector('.fa-percent')) value = '%';
            if (button.querySelector('.fa-exclamation')) value = '!';

            display.value += value;
        }
    });
});

// Mathematical Evaluation Function
function calculateResult() {
    try {
        let expression = display.value;

        // Convert user labels to executable JavaScript Math methods and constants
        expression = expression.replace(/pi/g, 'Math.PI');
        expression = expression.replace(/e/g, 'Math.E');
        expression = expression.replace(/l2e/g, 'Math.LOG2E');
        expression = expression.replace(/l10e/g, 'Math.LOG10E');
        expression = expression.replace(/sqrt\(/g, 'Math.sqrt(');
        expression = expression.replace(/cos\(/g, 'Math.cos(');
        expression = expression.replace(/sin\(/g, 'Math.sin(');
        expression = expression.replace(/tan\(/g, 'Math.tan(');
        expression = expression.replace(/log\(/g, 'Math.log10(');
        expression = expression.replace(/log10\(/g, 'Math.log10(');
        expression = expression.replace(/log2\(/g, 'Math.log2(');
        expression = expression.replace(/exp\(/g, 'Math.exp(');
        expression = expression.replace(/\^/g, '**');

        // Factorial handling (e.g., converts 5! into factorial logic)
        expression = expression.replace(/(\d+)!/g, (match, number) => factorial(parseInt(number)));

        // Evaluate string expression safely
        display.value = Function(`'use strict'; return (${expression})`)();
    } catch (error) {
        // Display user error on invalid math syntax
        display.value = 'Error';
        setTimeout(() => { display.value = ''; }, 1500);
    }
}

// Helper function for Factorial (!) operations
function factorial(n) {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
