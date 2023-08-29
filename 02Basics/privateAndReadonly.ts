//newbies style

// class User{
//     email: string;
//     name:string;
//      private readonly city:string = 'Bardhaghat';
//     constructor(email:string,name:string){
//         this.email = email
//         this.name = name
//     }
// }
class User{
    
     private readonly city:string = 'Bardhaghat';
    constructor(
        public email:string,
        public name:string,
        private userid : string
        ){
      
    }
}

// all the other property that we don't mark as private is public

const roshan = new User('r@r.com','roshan','hello')

