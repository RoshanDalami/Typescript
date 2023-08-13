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
    isActive : boolean
}

function createNewUser(user:User):User{
    return {name:'',email:'',isActive:false}
}

createNewUser({name:'',email:'',isActive:true})


export {}