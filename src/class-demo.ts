// how to use typeScript in class
class User {
    userName: string;
    age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }
    // this is method
    display(): void {
        console.log(`username:${this.userName}, age:${this.age}`)
    }
}
const user1 = new User('apurbo sarker', 12);
console.log(user1)