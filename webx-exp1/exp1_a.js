var Student = /** @class */ (function () {
    function Student(name, marks) {
        this.name = name;
        this.marks = marks;
    }
    Student.prototype.getTotalMarks = function () {
        return this.marks.reduce(function (sum, mark) { return sum + mark; }, 0);
    };
    Student.prototype.getAverageMarks = function () {
        return this.getTotalMarks() / this.marks.length;
    };
    Student.prototype.hasPassed = function () {
        return this.getAverageMarks() >= 40;
    };
    Student.prototype.displayResult = function () {
        console.log("Student Name: ".concat(this.name));
        console.log("Total Marks: ".concat(this.getTotalMarks()));
        console.log("Average Marks: ".concat(this.getAverageMarks().toFixed(2)));
        console.log("Result: ".concat(this.hasPassed() ? "Passed" : "Failed"));
    };
    return Student;
}());
// Example Usage
var student = new Student("Sannidhi Kailaje", [55, 60, 72]);
student.displayResult();
