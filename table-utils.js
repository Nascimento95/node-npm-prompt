// var multiplyFunction = require("./multiply.js")

// fonction multiplication
function multiply (number){
    
    if (number == number){
        for (var i = 1; i <=10 ; i++){
            var resultMultiply = number * i
            console.log(`${number}x${i}=${resultMultiply}`);
        } 
    } else{
        console.log("error!! enter number ");
    }
    
}
var args = process.argv.slice(2);
var paraMultiplication = parseInt(args[0])
console.log(paraMultiplication);
// fonction addition
function addition(number) {
    
    if (number == number){
        for (var i = 1; i <=10 ; i++){
            var resultAddition = number + i
            console.log(`${number}x${i}=${resultAddition}`);
        } 
    } else{
        console.log("error!! enter number ");
    }
}
var args = process.argv.slice(2);
console.log(addition(parseInt(args[0])));
console.log(args[2]);
//  pour exporter mes 2 fonction
module.export = {
    multiply,
    addition
}