// Getters and setters are designed so that any private method can be exposed outside 
// and in the setters there is no return type and in the getters there is a return type 
// Protected --------> is also a keyword in typescript which is used to make the variable accessible in the child class like the children class which is extending the parent class
class GetSetUser {

    // private variable 
    private course_count = 1; 
    constructor (
        public email: string,
        public name: string,
    ){

    }

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    // private method
    private deleteToken(){
        console.log("Deleting Token");
    }

    get courseCount():number{
        return this.course_count;
    }

    set courseCount(count:number){
        if(count==0){
            throw new Error("course count should be more than 1");
        }
        this.course_count = count;
    }

}