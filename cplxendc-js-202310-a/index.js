/*
CPLXENDC - Release A - 20231006
- .cplxendc / 2x build tool
- process / function
- async / const / mut
- private / public / protected
- var / int / float / string
*/

class cplxendc {
    constructor(text) {
        this.text = text;
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

const str_code = `
print "hello world";
screwyou
`

const program = new cplxendc(str_code);
program.init();
program.run();
program.shutdown();