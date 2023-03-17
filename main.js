const buttonE=document.getElementById('btnE')
const buttonD=document.getElementById('btnD')
const buttonC=document.getElementById('btnC')
const error=document.getElementById('error')
const inputText= document.getElementById('inputText')
const result=document.getElementById('result')

const content=document.getElementById('contentEnc')
const msjResult=document.getElementById('msjResult')

const reglas = { "e":"enter","i":"imes","a":"ai","o":"ober","u":"ufat"};

let valorEncriptado
let valorD

inputText.addEventListener('input',()=>{
    value=inputText.value
    let letras= /[A-Z]/g;
    let regEx=/[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    if(value.match(letras)||value.match(regEx)){
        error.classList.add('text-red-700')
        inputText.classList.add('borde')
    }else{
        inputText.classList.remove('borde')
        error.classList.remove('text-red-700')
    }


   
})

buttonE.addEventListener('click',()=>{
    ocultar()
    encriptar(inputText.value)
})

buttonD.addEventListener('click',()=>{
    desencriptar(inputText.value)
})

buttonC.addEventListener('click',()=>{
    let copia =result.innerText
    navigator.clipboard.writeText(copia);
    inputText.value=``
    
})

function encriptar(text){
    for(letra in reglas){
        valorEncriptado=text=text.replaceAll(letra,reglas[letra])
    }
    result.innerText=`${valorEncriptado}`
}

function desencriptar(text){
    for(letra in reglas){
       valorD=text=text.replaceAll(reglas[letra],letra)
    }
    result.innerText=`${valorD}`
}

function ocultar(){
    
    content.classList.toggle('hidden')
    msjResult.classList.toggle('hidden')
}

