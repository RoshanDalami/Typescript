const User = {
    name : 'Roshan',
    email:'email@email.com',
    isActive : true 
}

function createUser ({name:string,isPaid:boolean = false}){

}


createUser({name:'roshan',isPaid:false})

function createCourse ():{name:string,price:number}{
    return{ name:'NextJS',price : 399}
}


type User = {
    name : string ,
    email: string,
    isActive : boolean,
    isVerified:boolean,
}

function createNewUser(user:User):User{
    return {name:'',email:'',isActive:false , isVerified:true}
}

createNewUser({name:'',email:'',isActive:true, isVerified:true})


export {}