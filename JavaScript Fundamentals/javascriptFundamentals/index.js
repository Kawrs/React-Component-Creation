
//array
let tasks = [];
      
//variables
const listContainer = document.getElementById("listContainer");

//functions
function addTask(){
    try{

        //DOM
        let writtenTask = document.getElementById("writtenTask");
        const inputTask = writtenTask.value.trim();
        if(inputTask === "")
        {
            throw new error("Task can not be empty");
        }
        else
        {
            //objects
            const newTask = {
                name: inputTask,
                dateAt: new Date(), 
            };
            //newTask.name = inputTask;
            //newTask.dateAt = new Date();
            tasks.push(newTask);
            renderTask();
            writtenTask.value = "";
        }
    }
    catch(error){
        alert(error);
    }  
}
//a function to render the tasks from the array
function renderTask(){
    try{
        listContainer.innerHTML = "";

        tasks.forEach((task, index) => {
            let li = document.createElement("li");
            li.textContent = `${task.name} (Added: ${task.dateAt.toLocaleString()})`;


            let span = document.createElement("span"); //the x button at the end of the task
            span.innerHTML = "\u00d7"; 

            span.onclick = function(){ //with the x button it allows user to remove the tasks on the array
                tasks.splice(index, 1);
                renderTask();
            };
            li.appendChild(span);
            listContainer.appendChild(li);
            
        });  
            
        
    }
    catch(error){
        console.error("render error"+ error);
    }  
}
//for the checkmark
listContainer.addEventListener("click", function(e){
        if(e.target.tagName === "LI")
        {
            e.target.classList.toggle("checked");
        }
}, false);

