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
var user1 = new User('apurbo sarker', 12);
console.log(user1);
