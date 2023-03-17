let openCard=0;
let card1=null;
let card2=null;
let firstResult =null;
let lastResult=null;
let movement=0;
let hits=0;
let timer=false;
let time=30;
let inicialTime=30;
let countdown0=null;
//documento html
let showMovement=document.getElementById('movimiento')
let showHits=document.getElementById('aciertos')
let showTimer=document.getElementById('t-restante')

//generacion de numeros aleatorios
let number = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
number=number.sort(()=>{//generar numeros aleatorios
    return Math.random()-0.5
});
console.log(number)

function countTime(){
    countdown0=setInterval(()=>{
        time--;
        showTimer.innerHTML=`Tempo:${time} sg`;
        if(time==0){
            clearInterval(countdown0);
            blockCard();
        }
    },1000)
}
function blockCard(){
    for(let i=0;i<=15;i++){
        let lockedCArd=document.getElementById(i);
        lockedCArd.innerHTML=number[i];
        lockedCArd.disabled=true;

    }
}

function destapar(id){
    if(timer==false){
        countTime();
        timer=true;
    }
    openCard++;
    if(openCard==1){
        //mostrar el primer numero
        card1=document.getElementById(id);
        firstResult=number[id]
        card1.innerHTML=firstResult;
        //deshabilitar el primer boton
        card1.disabled=true;
    }else if(openCard==2){
        //mostrar segundo numero
        card2=document.getElementById(id);
        lastResult=number[id];
        card2.innerHTML=lastResult;
        card2.disabled=true;
        //incrementar movimientos
        movement++;
        showMovement.innerHTML=`Movimiento:${movement}`;
        if(firstResult==lastResult){
            openCard=0;

            //aumentar aciertos
            hits++;
            showHits.innerHTML=`Aciertos:${hits}`;
            if(hits==8){
                clearInterval(countdown0);
                showHits.innerHTML=`Aciertos:${hits}😲`;
                showTimer.innerHTML=`Bien Echo 🎉 Te demorastes ${inicialTime - time}sg`;
                showMovement.innerHTML=`Movimiento:${movement}👍`;
            }
        }else{
            //volver a tapar los valores
            setTimeout(()=>{
                card1.innerHTML=' '; 
                card2.innerHTML=' ';
                card1.disabled=false;
                card2.disabled=false;
                openCard=0;
            },800)
        }
    }
}
