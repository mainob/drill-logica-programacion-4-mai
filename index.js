//package prompt
//const prompt = require('prompt-sync')()
//Ask for an input from user

let r = document.getElementById("result")
const form = document.getElementById("form")

let input = parseInt(document.getElementById("num"))

form.addEventListener ("submit", (event) => {
    event.preventDefault()  
    let input = document.getElementById("num").value

    if (!isNaN(input)){
        let num0 = 0, num1 = 1, nextNum, fibo = [];

        fibo.push(num0);
        fibo.push(num1);
    
        nextNum = num0 + num1;
        
        for (let i = 1; i <= input; i++){
            fibo.push(nextNum);
            num0 = num1;
            num1 = nextNum;
            nextNum = num0 + num1;
        }
        r.textContent = `${fibo.join()}`
    }
    else {
        alert("Incorrect type value")
    }
})

function fibonacci(num){
    let num0 = 0, num1 = 1, nextNum, fibo = [];

    fibo.push(num0);
    fibo.push(num1);

    nextNum = num0 + num1;
    
    for (let i = 1; i <= input; i++){
        fibo.push(nextNum);
        num0 = num1;
        num1 = nextNum;
        nextNum = num0 + num1;
    }
    console.log(fibo.join())
}
fibonacci(input)