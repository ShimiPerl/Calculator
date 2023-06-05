let result = []
let equation = ""
let answer = 0
let multiplication1 = 0
let divide1 = 0

function number(number){
    equation = equation + number;
    document.querySelector('.box').innerHTML = equation;
    if((number === '-') || (number === '+') || (number === '/') || (number === '*') || (number === '.')){
        result.push(number);
    }else{
        result.push(Number(number));
    }
}

function ac(){
    equation = ""
    result = []
    answer = 0
    multiplication1 = 0
    document.querySelector('.box').innerHTML = equation;
}

function printToBox(){
    document.querySelector('.box').innerHTML = checkLegal();
    document.querySelector('.box').innerHTML = answer;
    equation = ""
    result = []
    answer = 0
    multiplication1 = 0
}

function checkLegal(){
    checkSyntax()
    checkMultiplication()
    checkDivide()
    checkPlusMInus()
}

function checkSyntax(){
    for(let i = 0;i < result.length;i++){
        if(typeof result[i] === typeof "+"){
            if(typeof result[i + 1] === typeof "+"){
                ac()
                alert("Do not enter to oprators one after onther")
            }
        }
    }
}

function checkMultiplication(){
    let counter1 = ""
    let counter = ""
    let postionF
    let postionL
    
    for(let i = 0; i < result.length; i++){
        if(result[i] === "*"){
            let  j  = i + 1;
            for(j; j < result.length; j++){
                if((typeof result[j] === typeof 4) || (result[j] === ".")){
                    counter = counter + result[j].toString();
                }else if(typeof result[j] === typeof "+"){
                    break;
                }
                postionL = j;
            }
            j = i - 1;
            for(j; j >= 0; j--){
                if((typeof result[j] === typeof 4) || (result[j] === ".")){
                    counter1 = counter1 + result[j].toString();
                }else if(typeof result[j] === typeof "+"){
                    postionF = j + 1
                    break;
                }if(j === 0){
                    postionF = 0
                }
            }
            counter1 = counter1.split("").reverse().join("");
            multiplication(counter1,counter)
            counter = ""
            counter1 = ""
            let newresult = []
            newresult = result.slice(0,postionF)
            result = result.slice(postionL + 1,result.length)
            newresult.push(multiplication1)
            for(let i = 0; i < result.length; i++){
                newresult.push(result[i])
            }
            result = newresult
            i = 0
        }
    }
}

function checkDivide(){
    let counter1 = ""
    let counter = ""
    let postionF
    let postionL
    
    for(let i = 0; i < result.length; i++){
        if(result[i] === "/"){
            let  j  = i + 1;
            for(j; j < result.length; j++){
                if((typeof result[j] === typeof 4) || (result[j] === ".")){
                    counter = counter + result[j].toString();
                }else if(typeof result[j] === typeof "+"){
                    break;
                }
                postionL = j;
            }
            j = i - 1;
            for(j; j >= 0; j--){
                if((typeof result[j] === typeof 4) || (result[j] === ".")){
                    counter1 = counter1 + result[j].toString();
                }else if(typeof result[j] === typeof "+"){
                    postionF = j + 1
                    break;
                }if(j === 0){
                    postionF = 0
                }
            }
            if(Number(counter) !== 0){
                counter1 = counter1.split("").reverse().join("");
                divide(counter1,counter)
                counter = ""
                counter1 = ""
                let newresult = []
                newresult = result.slice(0,postionF)
                result = result.slice(postionL + 1,result.length)
                newresult.push(divide1)
                for(let i = 0; i < result.length; i++){
                    newresult.push(result[i])
                }
                result = newresult
            }else{
                alert("you can't divide be 0")
                ac()
            }
            i = 0
        }
    }
}

function checkPlusMInus(){
    let counter = ""

    if((typeof result[0] === typeof 4)){
        result.unshift("+")
    }

    for(let i = 0; i < result.length; i++){
        if(result[i] === "-"){
            let  j
            for(j = i + 1; j < result.length; j++){
                if((typeof result[j] === typeof 4) || (result[j] === ".")){
                    counter = counter + result[j].toString()
                }else if(typeof result[j] === typeof "+"){
                    break;
                }
            }
            minus(counter);
            counter = "";
            i = j - 1;
        }else if(result[i] === "+"){
            let  j
            for(j = i + 1; j < result.length; j++){
                if((typeof result[j] === typeof 4) || (result[j] === ".")){
                    counter = counter + result[j].toString()
                }else if(typeof result[j] === typeof "+"){
                    break;
                }
            }
            plus(counter);
            counter = "";
            i = j - 1;
        }
    }
}

function plus(partOfEquation){
    answer = answer + Number(partOfEquation)
}

function minus(partOfEquation){
    answer = answer - Number(partOfEquation)
}

function multiplication(x,y){
    partOfEquation = Number(x) * Number(y)
    multiplication1 = Number(partOfEquation)
}

function divide(x,y){
    partOfEquation = Number(x) / Number(y)
    divide1 = Number(partOfEquation)
}