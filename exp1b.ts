class Student {
    name: string;
    studentId: number;
    grade: string;
    
    constructor(name: string, studentId: number, grade: string) {
        this.name = name;
        this.studentId = studentId;
        this.grade = grade;
    }

    getDetails(): void {
        console.log(`Student Name: ${this.name}`);
        console.log(`Student ID: ${this.studentId}`);
        console.log(`Grade: ${this.grade}`);
    }
}

class GraduateStudent extends Student {
    thesisTopic: string;
    
    constructor(name: string, studentId: number, grade: string, thesisTopic: string) {
        super(name, studentId, grade);
        this.thesisTopic = thesisTopic;
    }

    getDetails(): void {
        super.getDetails();
        console.log(`Thesis Topic: ${this.thesisTopic}`);
    }
}

class LibraryAccount {
    accountId: number;
    booksIssued: number;
    
    constructor(accountId: number, booksIssued: number) {
        this.accountId = accountId;
        this.booksIssued = booksIssued;
    }

    getLibraryInfo(): void {
        console.log(`Library Account ID: ${this.accountId}`);
        console.log(`Books Issued: ${this.booksIssued}`);
    }
}

// Demonstrating composition
class StudentWithLibrary {
    student: Student;
    libraryAccount: LibraryAccount;
    
    constructor(student: Student, libraryAccount: LibraryAccount) {
        this.student = student;
        this.libraryAccount = libraryAccount;
    }

    showFullDetails(): void {
        this.student.getDetails();
        this.libraryAccount.getLibraryInfo();
    }
}


const student = new Student("Sannidhi kailaje", 101, "A");
const gradStudent = new GraduateStudent("Priya", 102, "A+", "Machine Learning");
const libraryAccount = new LibraryAccount(5001, 3);
const studentWithLibrary = new StudentWithLibrary(student, libraryAccount);

console.log("Student Details:");
student.getDetails();
console.log("\nGraduate Student Details:");
gradStudent.getDetails();
console.log("\nLibrary Account Info:");
libraryAccount.getLibraryInfo();
console.log("\nStudent With Library Info:");
studentWithLibrary.showFullDetails();
