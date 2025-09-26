//Grabbing elements
const taskInput=document.getElementById("task-input");
const addBtn=document.getElementById("add-btn");
const taskList=document.querySelector(".task-list")

//Add Task
addBtn.addEventListener("click",(e)=>{
    const taskText = taskInput.value.trim();
    if (taskText=="") return; //Ignore empty inputs

    //Create a new list 
    const li = document.createElement("li");

    li.innerHTML=`<span class="task-text">${taskText}</span>
                <div class="task-actions">
                    <button class="done-btn"><i class="fa-solid fa-check"></i></button>
                    <button class="edit-btn"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
                </div>`;
    taskList.appendChild(li);
    taskInput.value=""; //clear input field
})



taskList.addEventListener("click",(e)=>{
    const btn=e.target.closest('button');
    if (!btn) return;

    const li=btn.closest('li')
      if (!li) return;

    //Delete task
    if (btn.classList.contains("delete-btn")){
        li.remove()
        return;
    }

    //Done/Undo
    if(btn.classList.contains("done-btn")){
        li.classList.toggle("completed")  //toggle class

        //toggle icon
        const icon=btn.querySelector("i")
        if(li.classList.contains("completed")){
             icon.classList.remove('fa-check');
             icon.classList.add('fa-rotate-left'); 
        } else{
            icon.classList.remove('fa-rotate-left');
            icon.classList.add('fa-check')
        }
        return;
    }

    //Edit button
    if(btn.classList.contains("edit-btn")){
        const span=li.querySelector(".task-text")
        const newText= prompt("Edit task:",span.textContent);
        if(newText!==null&&newText.trim()!==""){
            span.textContent=newText.trim()
        }
    }
})