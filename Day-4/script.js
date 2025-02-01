const taskInput=document.getElementById('taskInput');
const addTaskBtn= document.getElementById('addTaskBtn');
const taskList=document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent=taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent='remove';
        removeBtn.classList.add('remove-btn');

        removeBtn.addEventListener('click',function(){
            taskList.removeChild(li);
        });

        li.appendChild(removeBtn);

        taskList.appendChild(li);

        taskInput.value='';
        
    } else{
        alert('Please enter a task');
    }
}
addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(event){
    if (event.key === 'Enter') {
        addTask();
        
    }
});