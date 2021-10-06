

 function calculate(valeur1, valeur2, operator) {
     
    if(operator == "+") {
        var result = valeur1 + valeur2
    } else if (operator == "*") {
        result = valeur1 * valeur2
    } else if (operator == "-") {
        result = valeur1 - valeur2
    } else if (operator == "/"){
        result = valeur1 / valeur2
    }
    return result
 }
 console.log(process.argv);
var args = process.argv.slice(2);
console.log("arguments : ", args);
console.log(parseInt(args[0]))
console.log(parseInt(args[1]))
console.log(args[2])

console.log(calculate(parseInt(args[0]), parseInt(args[1]), args[2]));
// console.log(calculate(parseInt(args[0]),parInt(args[1]),parInt(args)[2]))



 