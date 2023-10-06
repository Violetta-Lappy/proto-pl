const KToken = {
    K_Number: 0,
    K_Identifier: 1,
    K_Equal: 2,
    K_OpenParen: 3,
    K_CloseParen: 4,
    K_BinaryOperator: 5,
    K_Let: 6,
}

class Token {
    constructor(value, type) {
        this.value = value;
        this.type = KToken;
    }
}

class ArgumentException {
    static NullReferenceException(){ console.error("Null Reference Exception !!"); }
    static WrongAssignmentException(){ console.error("Wrong Assignment Exception !!"); }
}



class cplxendc {
    constructor(text) {
        this.arg_text = text;
    }
    tokenize() {
    }
    parser() {
    }

    Init() { 
        console.log("CPLXENDC LOG: initalize"); 
        ArgumentException.NullReferenceException();
        //ArgumentException.WrongAssignmentException();
    }

    Run() {
        if (this.arg_text == null) {
            console.log("Exception: No Code To Be Found");
        }
        else {
            console.log(this.arg_text)
        }
    }

    Shutdown() { 
        console.log("CPLXENDC LOG: shutdown"); 
    }
}

const str_code = 
`HelloWorld(str_string : string) : void {
    print("hello world");
    println("Hello world!!");
}
let i32_pSomething = 3 as int*;
`
;

const compiler = new cplxendc(str_code);
compiler.Init();
compiler.Run();
compiler.Shutdown();