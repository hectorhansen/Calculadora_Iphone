// const btns = document.querySelectorAll("button");
const value = document.querySelector('.number-container');
// let newValue

// btns.forEach(function (btn){
//     btn.addEventListener('click', () => {
//         if(btn.textContent ==="AC"){
//             value.textContent="0"
//         }else{
//             if(value.textContent.length>8){
//                 value.classList.add('red');
//             }else{
//                 if(value.textContent==0){
//                     newValue = btn.textContent;
//                     value.textContent=newValue;
//                 }else{
                    
//                     newValue = value.textContent + btn.textContent;
//                     value.textContent=newValue;
//                 }
//             }    
//         }
         
//     })
// });

let number1,number2,r =0
let opt


function insert(number){
    if(number==="." && value.textContent==="0"){
        value.textContent="0.";
    }else{
        if(value.textContent==="0"){
            value.textContent=null;
        }
        if(value.textContent.length>8){
            value.classList.add('red');
        }else{
            let num = value.textContent
            value.textContent= num + number   
        }
    }
    
}

function clean(btn){
    value.textContent=0
    value.classList.remove('red');
}

function mod(){
    value.textContent=parseFloat(value.textContent)*-1
}

function percent(){
    number2=parseFloat(value.textContent)/100
    r = number1 + (number1 * number2)
    value.textContent = r
}


function sum(){
    number1 = parseFloat(value.textContent)
    opt="sum"
    clean()
}

function subtract(){
    number1=parseFloat(value.textContent)
    opt="subtract"
    clean()
}

function multiply(){
    number1=parseFloat(value.textContent)
    opt="multiply"
    clean();
}

function dividir(){
    number1=parseFloat(value.textContent)
    opt="dividir"
    clean();
}

function result(){
    number2=parseFloat(value.textContent)

    switch(opt){
        case "sum":
            r = number1+number2;
            value.textContent=r;
            break;

        case "subtract":
            r = number1-number2;
            value.textContent=r;
            break;

        case "multiply":
            r = number1*number2;
            value.textContent=r;
            break;

        case "dividir":
            r = number1/number2;
            value.textContent=r;
            break;       
    }
}


