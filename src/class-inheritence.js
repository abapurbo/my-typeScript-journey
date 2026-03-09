var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// how to use typeScript in class
var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    // this is method
    User.prototype.display = function () {
        console.log("username:".concat(this.userName, ", age:").concat(this.age));
    };
    return User;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(userName, age, rollNumber) {
        var _this = _super.call(this, userName, age) || this;
        _this.rollNumber = rollNumber;
        return _this;
    }
    // this is method
    Student.prototype.display = function () {
        console.log("username:".concat(this.userName, ", age:").concat(this.age));
    };
    return Student;
}(User));
var user1 = new Student('apurbo sarker', 12, 123456667);
console.log(user1);
