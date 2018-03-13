//enums
enum ParserState {
    Idle = 1,
    Read0,
    Read1
}

//abstract classes
abstract class Imagine {
    public myResult: number;
    public myState: ParserState;
    constructor(public myA: number, public myB: number) {
        this.myResult = myA + myB;
        this.myState = ParserState.Idle;
    }
    public saySomething(): void {
        console.log(this.myA + " " + this.myB);
    }
}

//extend classes
class Future extends Imagine {
    public saySomething(): void {
        console.log(this.myA);
    }
}

let myImagine: Imagine = new Future(2, 2);
myImagine.saySomething();
let myFuture: Future = new Future(9, 9);
myFuture.saySomething();

//interface
interface DataInterface {
    field: number;
    workerMethod(): void;
}

class Wrkr implements DataInterface {
    field: number;
    workerMethod(): void {
        throw new Error("Method not implemented.");
    }
}