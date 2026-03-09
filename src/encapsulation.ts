// what is encapsulation ?
// answer : encapsulation is accessing the data from outside of the class. we can access the data
// from outside of the class using public ,private and protected and readonly 
// how to use typeScript in class
class User {
    public userName: string;// only ascessible within the class and its subclasses
    protected age: number;//only ascessible within the class and its subclasses
    private rollNumber: number; // Only accessible within the class
    readonly id: number;// only readonly. can not change the value  

    constructor(userName: string, age: number, rollNumber: number, id: number) {
        this.userName = userName;
        this.age = age;
        this.rollNumber = rollNumber;
        this.id = id;
    }
    // this is method
    display(): void {
        console.log(`username:${this.userName}, age:${this.age}, rollNumber:${this.rollNumber}, id:${this.id}`)
    }
}
const user1 = new User('apurbo sarker', 12, 1, 23242412);
console.log(user1)