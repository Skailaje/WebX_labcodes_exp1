var Manager = /** @class */ (function () {
    function Manager(name, id, department) {
        this.name = name;
        this.id = id;
        this.role = "Manager";
        this.department = department;
    }
    Manager.prototype.getDetails = function () {
        return "Manager Name: ".concat(this.name, ", ID: ").concat(this.id, ", Role: ").concat(this.role, ", Department: ").concat(this.department);
    };
    return Manager;
}());
var Developer = /** @class */ (function () {
    function Developer(name, id, programmingLanguages) {
        this.name = name;
        this.id = id;
        this.role = "Developer";
        this.programmingLanguages = programmingLanguages;
    }
    Developer.prototype.getDetails = function () {
        return "Developer Name: ".concat(this.name, ", ID: ").concat(this.id, ", Role: ").concat(this.role, ", Languages: ").concat(this.programmingLanguages.join(", "));
    };
    return Developer;
}());
// Example Usage
var manager = new Manager("sannidhi Kailaje", 201, "HR");
var developer = new Developer("krish", 301, ["TypeScript", "JavaScript", "Python"]);
console.log(manager.getDetails());
console.log(developer.getDetails());
