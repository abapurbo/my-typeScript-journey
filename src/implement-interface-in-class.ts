// what is  interface in typescript?
// Answer: Interface is a teamplate for creating objects.It is decrease the complexity of code and increase the reusability of code.It is decrease duplication of code.
// how to implement interface in class?
// Answer:We can implement interface in class by using implements keyword. We can implement multiple interfaces in a class by using comma(,) separated list of interfaces.
interface IUser {
    id: number;
    name: string;
    email: string;
}
class Person implements IUser {
    constructor(public id: number, public name: string, public email: string) { }
    display(): void {
        console.log(`id:${this.id}, name:${this.name}, email:${this.email}`)
    }
}
const user = new Person(1, 'apurbo sarker', 'apurbo@example.com')
console.log(user)

//    interface IUserFormatter{
//     formatUser: () => string
//   }

//   class User implements IUserFormatter{
//     constructor(private fullName: string, private age: number){}
//     formatUser = () => {
//       return `name: ${this.fullName}, age: ${this.age}`
//     }
//   }
//   const user1=new User('apurbo ' ,12)