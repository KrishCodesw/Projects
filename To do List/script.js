const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value;
    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Fade-in effect
    li.style.opacity = 0; 
    taskList.appendChild(li);
    setTimeout(() => li.style.opacity = 1, 10); // Delay to trigger CSS transition

    taskInput.value = ''; // Clear input field
});
