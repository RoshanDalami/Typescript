const Score: Array<number> = []; //Generic example

const names: Array<string> = [];

function identityOne(val:boolean | number):boolean | number{
    return val
}

function identityTwo(val:any):any{
    return val
}
//incase of any number can be passed and string can be return .

function identityThree<Type>(val:Type): Type{
    return val
}
//incase of <Type> the type you send that will not changed. 
//for example . If we passed number than entire type should be a number. ..basically locking that type.

function identityFour<T>(val:T):T{
    return val
}

interface Bootle{
    brand:string,
    type:number
}

// identityFour<Bootle>({brand:'melton',type:10})

function getSearchProducts<T>(product:T[]):T{
    //some database operation. and index is 3.
    const myIndex = 3

    return product[myIndex] //return type is T and [0] is one of the value of that array.
}   
//<T,> to mention that is generic type.
const getMoreSearchProduct = <T,>(search:T[]):T=>{
    //database operation
    const myIndex = 0
    return search[myIndex]
}

function anotherFunction<T,U extends number>(val1:T,val2:U):object{
    return {
        val1,
        val2
    }
}

anotherFunction(3,10)