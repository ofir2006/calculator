numbersContainer = document.querySelector('#numbers-container');
document.querySelector('#number').innerText = "0";
let currentOperator = "";
let currentNumber = 0;
let savedNumber = 0;
let stack = [];
reset =  false;

for(let i = 1; i <= 9; i++){
    if(i == 4){
        let plusOperator = document.createElement('button');
        plusOperator.classList.add('plus-button');
        plusOperator.classList.add('operator');
        plusOperator.style.backgroundColor = '#616161';
        plusOperator.innerText = '+';
        plusOperator.addEventListener('click', function(){
            stack.push(currentNumber);
            currentNumber = 0;
            currentOperator = '+';
            if(stack.length > 1){
            calculate();
            }
            console.log(stack);
        })
        numbersContainer.appendChild(plusOperator);
    }
    if(i == 7){
        let minusOperator = document.createElement('button');
        minusOperator.classList.add('minus-button');
        minusOperator.classList.add('operator');
        minusOperator.style.backgroundColor = '#616161';
        minusOperator.innerText = '-';
        minusOperator.addEventListener('click', function(){
            stack.push(currentNumber);
            console.log(stack);
            currentNumber = 0;
            currentOperator = '-';
            if(stack.length > 1){
            calculate();
            }
        })
        numbersContainer.appendChild(minusOperator);
    }

    let button = document.createElement('button');
    button.classList.add(i);
    button.classList.add('num');
    button.style.backgroundColor = '#616161';
    button.innerText = i;
    button.addEventListener('click', function(){
        if(currentNumber == 0){
        currentNumber = i
        }else{
            currentNumber += i.toString();
        }
        document.querySelector('#number').innerText = currentNumber;
        console.log(i);
        reset = false;
    });
    numbersContainer.appendChild(button);

    if(i == 9){
        let muiltiplyOperator = document.createElement('button');
        muiltiplyOperator.classList.add('multiply-button');
        muiltiplyOperator.classList.add('operator');
        muiltiplyOperator.style.backgroundColor = '#616161';
        muiltiplyOperator.innerText = '*';
        muiltiplyOperator.addEventListener('click', function(){
            savedNumber = currentNumber;
            currentNumber = 0;
            currentOperator = '*';
        })
        numbersContainer.appendChild(muiltiplyOperator);
    }
}

let zero = document.createElement('button');
zero.classList.add('0');
zero.classList.add('zero');
zero.style.backgroundColor = '#616161';
zero.innerText = '0';
zero.addEventListener('click', function(){
    if(reset){
           clear();
    }
    
    if(currentNumber != 0){
        currentNumber += '0';
        document.querySelector('#number').innerText = currentNumber;
    }
})
numbersContainer.appendChild(zero);


let dot = document.createElement('button');
dot.classList.add('dot-button');
dot.classList.add('num');
dot.style.backgroundColor = '#616161';
dot.innerText = '.';
dot.addEventListener('click', function(){
    if(!(currentNumber.includes('.'))){
    currentNumber += '.';
    document.querySelector('#number').innerText = currentNumber;
    
    }
})
numbersContainer.appendChild(dot);

let equalOperator = document.createElement('button');
equalOperator.classList.add('equal-button');
equalOperator.classList.add('operator');
equalOperator.style.backgroundColor = '#616161';
equalOperator.innerText = '=';
equalOperator.addEventListener('click', function(){
    stack.push(currentNumber);
    calculate();
    console.log(stack);
});
numbersContainer.appendChild(equalOperator);


function calculate(){
    if(currentOperator == '*'){
        currentNumber = parseFloat(currentNumber) * parseFloat(savedNumber);
        document.querySelector('#number').innerText = currentNumber;
        currentOperator = "";
    }

    if(currentOperator == '/'){
        currentNumber = parseFloat(currentNumber) / parseFloat(savedNumber);
        document.querySelector('#number').innerText = currentNumber;
        currentOperator = "";
    }
   
    if(currentOperator == '+'){
        currentNumber = parseFloat(stack[stack.length - 2]) + parseFloat(stack[stack.length - 1]);
        document.querySelector('#number').innerText = currentNumber;
        stack.push(currentNumber);
        currentNumber = 0;
    }
    
    if(currentOperator == '-'){
            currentNumber = parseFloat(stack[stack.length - 2]) - parseFloat(stack[stack.length - 1]);
            document.querySelector('#number').innerText = currentNumber;
            stack.push(currentNumber);
            console.log(stack);
            currentNumber = 0;
    }

    reset = true;

}

function clear(){
    stack = [];
    currentNumber = 0;
    document.querySelector('#number').innerText = currentNumber;
}