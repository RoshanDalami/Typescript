abstract class TakePhoto{
    constructor(
        public cameraMode:string ,
        public filter : string
    ){}
    abstract getSepia():void
    getReelTime():number{
        //some calculation
        return 8
    }
}
//cannot create a instance of abstract classes.
// but we can make instance of class that extend abstract classes.
class Instagram extends TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string ,
        public brust : number
    ){
        super(cameraMode,filter) //super most passed a required value.
    }
    getSepia(): void {
        console.log('abstract class Sepia')
    }
}


const photoTaker = new Instagram('single','rabbit',8)