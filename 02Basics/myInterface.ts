interface User {
    readonly dbId : number, //makes it readonly
    email : string ,
    userId :number,
    googleId ?: string, //optional
    // startTrail : ()=> string // function definition
    startTrail():string, //this return string
    getCoupon(couponname:string,value:number):number, //this return number and want these args.

}

//loose form of class.

const User01:User = {
    dbId : 10,
    email:'r@r.com',
    userId:1,
    googleId : 'roshan@gmail.com',
    startTrail() {
        return 'roshan'
    },
    getCoupon(name:'Boobies',value:29){
        return 10
    }
}