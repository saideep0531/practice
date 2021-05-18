const prompt = require('prompt');
const calculate = require('./calculate')

prompt.start();


prompt.get(['num1','operation','num2'], function(err, result){
    var operation = result.operation;
    var num1 = parseFloat(result.num1);
    var num2 = parseFloat(result.num2);

    if(operation == "+"){
        console.log(add(num1, num2));
    } else if(operation == "-"){
        console.log(subtract(num1, num2));
    } else if(operation == "*"){
        console.log(multiply(num1, num2));
    } else if(operation == "/"){
            console.log(multiply(num1, num2));
    }else{
        console.log("please enter a valid operation");
    }

})

module.exports(userInput.js);