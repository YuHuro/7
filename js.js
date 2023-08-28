const input = document.querySelector('#mainInp')
const button = document.querySelector('#mainBtn')
const block = document.querySelector('#mainBlock')

function output(){
    block.innerHTML += '<h1>' + input.value + '</h1>'
}

button.addEventListener('click', output);

const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const equal = document.querySelector('#equals')
const block2 = document.querySelector('#secondMainBlock')

function calc(){
    let number1 = parseInt(num1.value)
    let number2 = parseInt(num2.value)
    let calc = number1 + number2
    for(let i=0; i<1; i++){
        if(isNaN(number1) || isNaN(number2)){
            block2.innerHTML += '<h1>error</h1>'
        }else{
            block2.innerHTML += '<h1>' + calc + '</h1>'
        }
    }
}
equal.addEventListener('click', calc)
