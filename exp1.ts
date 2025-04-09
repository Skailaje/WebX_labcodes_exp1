class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    divide(a: number, b: number): number | string {
        if (b === 0) {
            return "Error: Division by zero is not allowed.";
        }
        return a / b;
    }

    calculate(operation: string, a: number, b: number): number | string {
        switch (operation) {
            case 'add':
                return this.add(a, b);
            case 'subtract':
                return this.subtract(a, b);
            case 'multiply':
                return this.multiply(a, b);
            case 'divide':
                return this.divide(a, b);
            default:
                return "Error: Invalid operation.";
        }
    }
}

const calc = new Calculator();
console.log(calc.calculate('add', 22, 7)); 
console.log(calc.calculate('subtract', 22, 11)); 
console.log(calc.calculate('multiply', 22, 10)); 
console.log(calc.calculate('divide', 22, 5)); 
console.log(calc.calculate('divide', 22, 0)); 
console.log(calc.calculate('modulus', 22, 2)); 