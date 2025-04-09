interface Employee {
    name: string;
    id: number;
    role: string;
    getDetails(): string;
}

class Manager implements Employee {
    name: string;
    id: number;
    role: string;
    department: string;
    
    constructor(name: string, id: number, department: string) {
        this.name = name;
        this.id = id;
        this.role = "Manager";
        this.department = department;
    }
    
    getDetails(): string {
        return `Manager Name: ${this.name}, ID: ${this.id}, Role: ${this.role}, Department: ${this.department}`;
    }
}

class Developer implements Employee {
    name: string;
    id: number;
    role: string;
    programmingLanguages: string[];
    
    constructor(name: string, id: number, programmingLanguages: string[]) {
        this.name = name;
        this.id = id;
        this.role = "Developer";
        this.programmingLanguages = programmingLanguages;
    }
    
    getDetails(): string {
        return `Developer Name: ${this.name}, ID: ${this.id}, Role: ${this.role}, Languages: ${this.programmingLanguages.join(", ")}`;
    }
}

// Example Usage
const manager = new Manager("sannidhi Kailaje", 201, "HR");
const developer = new Developer("krish", 301, ["TypeScript", "JavaScript", "Python"]);

console.log(manager.getDetails());
console.log(developer.getDetails());
