function multiply (number){
    // for (var i = 1; i <=10 ; i++) {
        if (number == number){
            for (var i = 1; i <=10 ; i++){
                var resultMultiply = number * i
                console.log(`${number}x${i}=${resultMultiply}`);
            } 
        } else{
            console.log("error!! enter number ");
        }
    // }
}
var args = process.argv.slice(2);
console.log(multiply(parseInt(args[0])));
// multiply (1)