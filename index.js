
class Calculator {
	constructor(previousOperandTextElement, currentOperandTextElement){
		this.previousOperandTextElement = previousOperandTextElement;
		this.currentOperandTextElement = currentOperandTextElement;
		this.clear()
	}

	clear(){
		this.currentOperand = ''
		this.previousOperand = ''
		this.operation = undefined;
	}

	delete() {

	}

	appendNumber(number){
		this.currentOperand = number;
	}

	chooseOperation(operation){

	}

	compute(){

	}

	updateDisplay(){
		this.currentOperandTextElement.innerText  = this.currentOperand;
	}
}


const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
const clearAllButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
	button.addEventListener('click', () => {
		calculator.appendNumber(button.innerText)
		calculator.updateDisplay()
	});
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay();
    });
});