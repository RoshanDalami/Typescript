// const user:(string|number)[] = ['Roshan','Dalami',1]
let tUser:[string,number,boolean] //data can be only in this order.

tUser = ['Roshan',12,true]

let rgb :[number,number,number]
rgb = [255,255,0]

type User1 = [number,string]

const newUser:User1 = [1,'Roshan']

newUser[1] = 'Can be mainpulated this way'
// newUser.push(true) //this issue is fixed