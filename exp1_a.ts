class Student {
    name: string;
    marks: number[];

    constructor(name: string, marks: number[]) {
        this.name = name;
        this.marks = marks;
    }

    getTotalMarks(): number {
        return this.marks.reduce((sum, mark) => sum + mark, 0);
    }

    getAverageMarks(): number {
        return this.getTotalMarks() / this.marks.length;
    }

    hasPassed(): boolean {
        return this.getAverageMarks() >= 40;
    }

    displayResult(): void {
        console.log(`Student Name: ${this.name}`);
        console.log(`Total Marks: ${this.getTotalMarks()}`);
        console.log(`Average Marks: ${this.getAverageMarks().toFixed(2)}`);
        console.log(`Result: ${this.hasPassed() ? "Passed" : "Failed"}`);
    }
}

// Example Usage
const student = new Student("Sannidhi Kailaje", [55, 60, 72]);
student.displayResult();