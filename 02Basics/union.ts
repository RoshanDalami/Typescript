let sroce: number | string = 33 

type User ={
    name:string
    id:string
}

type Admin = {
    username : string
    id:number
}

let Roshan:Admin|User = {username:'roshan',id:10}

getDBId(5)
getDBId('5')

function getDBId(id:string | number){
if(typeof id === 'string'){
    id.toUpperCase()
}else{
    id + 2
}
}


//array 
const data:number[] = [1,2,3,4] 
const data1:(number|string)[] = [1,2,3,'4']

let seatAllotment : 'aisle' | 'middle' |'window' 
seatAllotment = 'window'
seatAllotment = "aisle"
