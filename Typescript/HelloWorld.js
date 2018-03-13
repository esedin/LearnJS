var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ParserState;
(function (ParserState) {
    ParserState[ParserState["Idle"] = 1] = "Idle";
    ParserState[ParserState["Read0"] = 2] = "Read0";
    ParserState[ParserState["Read1"] = 3] = "Read1";
})(ParserState || (ParserState = {}));
var Imagine = /** @class */ (function () {
    function Imagine(myA, myB) {
        this.myA = myA;
        this.myB = myB;
        this.myResult = myA + myB;
        this.myState = ParserState.Idle;
    }
    Imagine.prototype.saySomething = function () {
        console.log(this.myA + " " + this.myB);
    };
    return Imagine;
}());
var Future = /** @class */ (function (_super) {
    __extends(Future, _super);
    function Future() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Future.prototype.saySomething = function () {
        console.log(this.myA);
    };
    return Future;
}(Imagine));
var myImagine = new Future(2, 2);
myImagine.saySomething();
var myFuture = new Future(9, 9);
myFuture.saySomething();
var Wrkr = /** @class */ (function () {
    function Wrkr() {
    }
    Wrkr.prototype.workerMethod = function () {
        throw new Error("Method not implemented.");
    };
    return Wrkr;
}());
//# sourceMappingURL=HelloWorld.js.map