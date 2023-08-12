function addTwo(num: number):number {
  return num + 2;
// return 'hello'
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser =(name:string ,email:string,isPaid:boolean = false)=>{

}


//this type of return can be happen in real life senairo where we need to return more than one types
//will be learning later
// function getValue (myVal:number):boolean {
//     if(myVal > 5){
//         return true
//     }
//     return '200 OK'
// }

signUpUser("roshan", "roshan@roshan.dev", false);

loginUser('roshan','email@email.com')


const getHello = (s:string):string =>{
 return ''
}

const heros = ['thor','Iron Man','Spider Man']

heros.map((hero):string =>{
    return `hero is ${hero}`
})

function consoleError(errmessage:string):void{
    console.log(errmessage)
}
function handelError(errmessage:string):never{
    throw new Error(errmessage);
}


export {};
