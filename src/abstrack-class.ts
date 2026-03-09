// how to use typeScript in class
 abstract class User {
    userName: string;
    age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }
    // this is method
   abstract display(): void ;
}
class Student extends User{ // how to inherit.answer: we can inherit extends keyword
    rollNumber:number;
    
    constructor(userName:string,age:number,rollNumber:number){
        super(userName,age);
        this.rollNumber=rollNumber;
    }
    //   // this is method
    display(): void {
        console.log(`username:${this.userName}, age:${this.age}`)
    }

}
export {Student}