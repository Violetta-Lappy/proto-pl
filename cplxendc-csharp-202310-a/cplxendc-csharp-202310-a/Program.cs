//2023 ViolettaLappy - hoanglongplanner
//https://youtube.com/playlist?list=PLRAdsfhKI4OWNOSfS7EUu5GRAVmze1t2y&si=WCQApKTB4Vwpcp_0

internal class Program {
    private static void Main(string[] args) {
        Console.WriteLine("Hello, World!");
    }
}

class Lexer {
    private readonly string _text;
    private readonly int _position;
    public Lexer(string arg_text) {
        _text = arg_text;
    }
}

class Token {

}