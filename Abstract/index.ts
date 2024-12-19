
// we can use abstract classes to define a blueprint for other classes, we can not create a instance/object of an abstract class
// abstract classes are mainly for inheritance where other classes may derive from them. They may contain abstract methods that must be implemented by the derived classes and if we want to implement a method with some feature(body) in the abstract class, we can do that as well. 
// abstract classes are used to provide a blueprint for other classes and can not be instantiated on their own.
// abstract methods are methods that are declared in an abstract class, but they don't have implementation. The implementation is done in the derived classes.

abstract class TakePhoto {
    constructor( 
        public cameraMode: string,
        public filter: string
    ){}

    abstract takePicture():void;

    getReelTime():number{
        // some complex logic/calculation could be here 
        return 9;
    }
    // the child class can override this method as well 
}

class instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public userName: string
    ){
        super(cameraMode, filter);
    }
    takePicture(): void {
        console.log(`Taking a photo in ${this.cameraMode} mode with ${this.filter} filter`);
    }
}

const rs = new instagram("portrait", "black and white", "radha");
rs.takePicture();

// const rs = new TakePhoto("portrait", "black and white");