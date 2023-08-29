class User1{
    private readonly city:string = 'Bardhaghat';
    protected _courseCount = 1;
    constructor(
        public email:string,
        public password:string,
        public username:string
        ){

    }
    private deleteToken(){
        console.log('Token Deleted')
    }
    //getter
    get getAppleEmail():string{
        return `Apple ${this.email}`
    }

    get courseCount():number{
        return this._courseCount
    }
    //setter
    //cannot assign any datatype on setter.
    set courseCount(courseNum){
        if(courseNum <= 1){
            throw new Error('Course count should be more than 1')
        }
        this._courseCount = courseNum
    }

}


//inheritance
//it aquire all prop in it . But not those who are private

//with protected access modifier . when ever marked as protected can be access within a class and any class that inherit it. 
//Note: it will still be not available to public or cannot be used outside class
class SubUser extends User1{
    isFamily : boolean = true
    changeCourseCount(){
        this._courseCount = 10
    }
}


const Roshan = new User('r@r.com','123','roshan_cooldude')
// Roshan.deleteToken()//private property