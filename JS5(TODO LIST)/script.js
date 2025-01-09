const inputField = document.querySelector('input');
let task = '';  
document.addEventListener('DOMContentLoaded', loadTasks);
inputField.addEventListener('input', function() {
    task = inputField.value; 
});

const ul = document.getElementById('tasks');

function addTask(task) {
    const li = document.createElement('li'); 
    li.innerHTML =`<button class="checkbox" id="checkbox"><img class="check" id="check" src="download.png"></button> <P> ${task} </P><img class="cross" id="cross" src="8ec018b55a09b02667588e4fd916129f-removebg-preview.png">`; 
    ul.appendChild(li);  
    const checkboxBtn = li.querySelector('.checkbox');
            const checkImg = li.querySelector('.check');
            const taskText = li.querySelector('p');
            const deleteImg = li.querySelector('.cross');

            deleteImg.addEventListener('click', function() {
                li.remove();  saveTasks()
            });

            checkboxBtn.addEventListener('click', function() {
                if (taskText.style.textDecoration === 'line-through') {
                    checkImg.src = 'download.png'; 
                    taskText.style.textDecoration = 'none';
                    taskText.style.color = 'black';
                } else {
                    checkImg.src = '1200px-Eo_circle_orange_checkmark.svg.png'; 
                    taskText.style.textDecoration = 'line-through';
                    taskText.style.color = '#4e3e2e';
                }
                saveTasks()
            });

            taskText.addEventListener('click', function() {
                if (taskText.style.textDecoration === 'line-through') {
                    checkImg.src = 'download.png'; 
                    taskText.style.textDecoration = 'none';
                    taskText.style.color = 'black';
                } else {
                    checkImg.src = '1200px-Eo_circle_orange_checkmark.svg.png'; 
                    taskText.style.textDecoration = 'line-through';
                    taskText.style.color = '#4e3e2e';
                }
                saveTasks()
            });saveTasks()
        }
            function saveTasks() {
                const tasks = [];
                ul.querySelectorAll('li').forEach(li => {
                    const task = {
                        text: li.querySelector('p').innerText,
                        checked: li.querySelector('.check').src.includes('1200px-Eo_circle_orange_checkmark.svg.png')
                    };
                    tasks.push(task);
                });
                localStorage.setItem('tasks', JSON.stringify(tasks));
            }
    
            function loadTasks() {
                const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
                tasks.forEach(task => {
                    addTask(task.text);
                    const li = ul.querySelector('li:last-child');
                    if (task.checked) {
                        li.querySelector('.check').src = '1200px-Eo_circle_orange_checkmark.svg.png';
                        li.querySelector('p').style.textDecoration = 'line-through';
                        li.querySelector('p').style.color = '#4e3e2e';
                    }
                });
            }


document.querySelector('button').addEventListener('click', function() {
    if (task == '') {
        alert("You must enter something");
       }
       else{
        addTask(task);  
        inputField.value = '';  
        task = ''; 
       }
    
});



document.querySelector('.add').addEventListener('click', function () {
    const taskInput = document.querySelector('input[type="text"]');
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const tasksList = document.getElementById('tasks');
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <input type="checkbox" class="checkbox">
            <p>${taskText}</p>
            <span class="cross">&times;</span>
        `;
        tasksList.appendChild(taskItem);
        taskItem.classList.add('fade-in');
        taskInput.value = "";

        // Add event listener for the remove button
        taskItem.querySelector('.cross').addEventListener('click', function () {
            taskItem.classList.add('fade-out');
            setTimeout(() => taskItem.remove(), 300);
        });
    }
});

// CSS Animations
const style = document.createElement('style');
style.textContent = `
.fade-in {
    opacity: 0;
    animation: fadeIn 0.5s forwards;
}
.fade-out {
    opacity: 1;
    animation: fadeOut 0.5s forwards;
}
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
@keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
}
`;
document.head.appendChild(style);
