// Get elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Load tasks from local storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();

// Add task
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const task = { text: taskText, completed: false };
  tasks.push(task);
  saveTasks();
  renderTasks();

  taskInput.value = "";
});

// Render tasks
function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    const span = document.createElement("span");
    span.textContent = task.text;
    if (task.completed) span.classList.add("completed");
    span.addEventListener("click", () => toggleTask(index));
    
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "btn btn-danger btn-sm";
    delBtn.addEventListener("click", () => deleteTask(index));

    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}

// Toggle task completion
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

// Delete task
function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

// Save to local storage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
