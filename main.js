const screen =document.getElementById('screen');
const buttons=document.querySelectorAll('.buton')
const togglebtn=document.getElementById('togglebtn');

togglebtn.addEventListener('click',()=>{
    document.getElementById('img1').classList.toggle('hidden')
    document.getElementById('img2').classList.toggle('hidden')
    document.getElementById('container').classList.toggle('bg-slate-200')
    document.getElementById('display-screen').classList.toggle('bg-slate-400')
    screen.classList.toggle('text-slate-800')
})

buttons.forEach(e=>{
   e.addEventListener('click',element=>{

    let content=element.target.innerText
   
    if(content=="C"){
        screen.innerText=``
    }else if(content=="❰"){
        let string=screen.textContent
        screen.innerText=string.substring(0, string.length -1);
    }else if(screen.innerText != ""&&content=="="){
        screen.innerText=eval(screen.innerText)
        screen.innerText = screen.innerText.slice(0,8);
    }else if(screen.innerText==''&&content=="="){
        screen.innerText='null'
        setTimeout(()=>(screen.innerText=``),1000)
    }else{
        screen.innerText+=content
    }
       
   })
})


