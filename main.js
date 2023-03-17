
let IdCounter =0;
const input =document.getElementById('input')



userInput.addEventListener('submit',(e)=>{
    e.preventDefault();
    addTask();
})


function addTask(){
    IdCounter++;
    let InputValue=input.value
    list.innerHTML +=`
    <div id="${IdCounter}" class="mb-4 h-12 flex justify-between items-center bg-white rounded-md px-2 ">
                <label for="">
                    <input class="w-4 h-4 mr-2" type="checkbox">
                    ${InputValue}
                </label>
                <img class="cursor-pointer" src="/img/delete-svgrepo-com.svg" width="30">
    </div>
   `
   input.value=``

   updateStats();
}

list.addEventListener('click',(e)=>{
    if(e.srcElement.nodeName=='INPUT'){
        updateStats();
    }else if(e.srcElement.nodeName=='IMG'){
        
        deleteTask(e.srcElement.parentNode.id);
    }   
})

function updateStats(){
    let listlenght=list.querySelectorAll('div');
    let check=list.querySelectorAll('input[type="checkbox"]:checked')
    stats.innerHTML=`<p>Tareas:${listlenght.length } Tareas listas:${check.length}</p>`
}

function deleteTask(id){
    let taskTodelete=document.getElementById(id)
    list.removeChild(taskTodelete);
    updateStats();
}