/*
CPLXENDC - Release A - 20231006
- #include <main.js> //no bullshit
- .cplxendc / 2x build tool
- cplxendc_gui / cplxendc_carbon - inspired from IBM Carbon (single file and minimal performance) - imgui & retained
- process (ps) / function (fn) - first word last word
- async / const / mut
- private / public / protected
- var / int / float / string
- let something = 0;
*/

class cplxendc {
    constructor(text) {
        this.text = text;
    }
    tokenize(){
        const length = this.text.length;
        let pos = 0;
        let tokens = [];
        const BUILT_IN_KEYWORDS = ["print", "var", "let"];
        const varChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_';
        let line = 1;
        let column = 0;
    }
    parse(){        
    }
    init() {
        console.log("CPLXENDC LOG: initalize");
    }
    run() {
        console.log(this.text);
    }
    shutdown() {
        console.log("CPLXENDC LOG: shutdown");
    }
}

const str_code = 
`ps HelloWorld() : void {
    print("hello world");
}
`

const program = new cplxendc(str_code);
program.init();
program.run();
program.shutdown();