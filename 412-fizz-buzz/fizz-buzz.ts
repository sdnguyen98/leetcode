function fizzBuzz(n: number): string[] {
    var res = [];
    for (var i = 1; i <= n; i++){
        res.push(
            (i % 15 === 0) ? "FizzBuzz":
            (i % 3 === 0) ? "Fizz":            
            (i % 5 === 0) ? "Buzz":
            i.toString()
        );
    }
    return res;
};