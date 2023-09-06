class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.hasComputed = false
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
        this.hasComputed = false
    }

    delete() {
        if (this.hasComputed == true) return 
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (this.hasComputed == true) return 
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    choseOperation(operation) {
        this.hasComputed = false
        if (this.currentOperand === '') return 
        if (this.previousOperand !== '') {
            this.compute()
            this.hasComputed = false
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute(){
        let computation 
        const prev = parseFloat(this.previousOperand)
        const curr = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(curr)) return 
        switch (this.operation){
            case '+': 
                computation = prev + curr
                break
            case '-': 
                computation = prev - curr
                break
            case '*': 
                computation = prev * curr
                break
            case '÷': 
                computation = prev / curr
                break
            default:
                return
        }
        this.hasComputed = true 
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
        if(this.operation != null){
            this.previousOperandTextElement.innerText = '${this.previousOperand} ${this.operation}' 
        }
        this.previousOperandTextElement.innerText = this.previousOperand
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equals]');
const deletButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-allClear]');
const previousOperandTextElement = document.querySelector('[data-previusOperand]');
const currentOperandTextElement  = document.querySelector('[data-currentOperand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.choseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deletButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})
