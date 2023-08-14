// const User = {
//   name: "Roshan",
//   email: "email@email.com",
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean = false }) {}

// createUser({ name: "roshan", isPaid: false });

// function createCourse(): { name: string; price: number } {
//   return { name: "NextJS", price: 399 };
// }

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
//   isVerified: boolean;
// };

// function createNewUser(user: User): User {
//   return { name: "", email: "", isActive: false, isVerified: true };
// }

// createNewUser({ name: "", email: "", isActive: true, isVerified: true });

type User = {
    readonly _id : string  //readonly keyword makes it readonly and nobody will be allowed to change it.
    name:string
    email : string 
    isActive:boolean ,
    creditCardNumber? : number // adding question mark makes it optional
}

const myUser:User = {
    _id:'',
    name:'roshan',
    email:'r@r.com',
    isActive:false
}

type cardNumber ={
    cardnumber : string
}

type cardDate = {
    carddate :string
}

type cardCVV = {
    cvv : number
}

type cardDetails = cardNumber & cardDate & cardCVV


myUser.isActive = true




export {};
