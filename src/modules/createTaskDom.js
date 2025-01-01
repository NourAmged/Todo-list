import { projects, getCurrentProject, saveProjectsToLocalStorage } from "./projectManager";
import outlineStar from '../../src/assets/images/icons8-star-48(1).png';
import filledStar from '../../src/assets/images/icons8-star-48.png';



function taskStat(removeBtn, star, checkedBtn) {
    const taskContainer = document.querySelector('.tasks');
    const projectName = getCurrentProject();

    removeBtn.addEventListener('click', () => {
        const taskTitle = getTaskTitle(removeBtn);
        const taskIndex = findTaskIndex(projects[projectName], taskTitle);

        if (taskIndex !== -1) {
            projects[projectName].splice(taskIndex, 1);
            const task = document.querySelector(`.${taskTitle.split(' ').join('_')}`);
            saveProjectsToLocalStorage();
            taskContainer.removeChild(task);

        }
    });

    star.addEventListener('click', () => {
        toggleImportantStatus(projectName, star);
        saveProjectsToLocalStorage(); 
    });

    checkedBtn.addEventListener('click', () => {
        toggleCompletionStatus(projectName, checkedBtn);
        saveProjectsToLocalStorage();
    });
    
}

// Toggle important status of a task
function toggleImportantStatus(projectName, star) {
    const taskTitle = getTaskTitle(star);
    const task = projects[projectName].find(task => task.title === taskTitle);

    if (task) {
        task.important = task.important ? 0 : 1;
        star.src = task.important ? filledStar : outlineStar;
    }
}

// Toggle completion status of a task
function toggleCompletionStatus(projectName, checkedBtn) {
    const taskTitle = getTaskTitle(checkedBtn);
    const task = projects[projectName].find(task => task.title === taskTitle);

    if (task) {
        const titleElement = checkedBtn.nextSibling;
        task.finished = task.finished ? 0 : 1;
        checkedBtn.style.backgroundColor = task.finished ? 'black' : 'white';
        titleElement.style.textDecorationLine = task.finished ? 'line-through' : 'none';
    }
}

// Create and append a task element to the DOM
function createTaskElement(taskContainer, taskTitle, taskDate) {
    const task = document.createElement('div');
    const title = document.createElement('p');
    const container = document.createElement('span');
    const date = document.createElement('p');
    const removeBtn = document.createElement('input');
    const contain = document.createElement('span');
    const checkedBtn = document.createElement('p');
    const star = new Image();
    const projectName = getCurrentProject();

    // Set task attributes and styles
    setupTaskElement(task, taskTitle, title, date, removeBtn, star, checkedBtn, taskDate);

    // Append task to container
    container.append(date, star, removeBtn);
    contain.append(checkedBtn, title);
    task.append(contain, container);
    taskContainer.appendChild(task);

    // Update task state based on project data
    updateTaskState(projectName, taskTitle, star, title, checkedBtn);
    // Add event listeners
    taskStat(removeBtn, star, checkedBtn);
}

// Set up task attributes and default styles
function setupTaskElement(task, taskTitle, title, date, removeBtn, star, checkedBtn, taskDate) {
    task.className = taskTitle.split(' ').join('_');
    title.textContent = taskTitle;
    date.textContent = taskDate || "No Due Date";
    star.src = outlineStar;
    star.alt = "Add Task Icon";
    star.style.width = "32px";
    star.style.height = "32px";
    removeBtn.value = "Remove";
    removeBtn.type = "button";
    checkedBtn.className = 'checked';
    checkedBtn.style.backgroundColor = 'white';
}

// Update task state based on saved data
function updateTaskState(projectName, taskTitle, star, title, checkedBtn) {
    // const task = projects[projectName]?.find(t => t.title === taskTitle);
    // if (!task) return;

    // star.src = task.important ? filledStar : outlineStar;
    // title.style.textDecorationLine = task.finished ? 'line-through' : 'none';
    // checkedBtn.style.backgroundColor = task.finished ? 'black' : 'white';
    const project = projects[projectName];

    for (let i = 0; i < project.length; i++) {
        if (project[i].important && project[i].title === taskTitle) {
            star.src = filledStar;
        } else if (project[i].title === taskTitle)
            star.src = outlineStar;
        if (!project[i].finished && project[i].title === taskTitle) {
            const title = checkedBtn.nextSibling;
            title.style.textDecorationLine = 'none';
            checkedBtn.style.backgroundColor = 'white';
        } else if (project[i].title === taskTitle) {
            title.style.textDecorationLine = 'line-through';
            checkedBtn.style.backgroundColor = 'black';
        }
    }
}

// Display tasks for the current project
function displayTaskDom() {
    const taskContainer = document.querySelector('.tasks');
    const currentProject = getCurrentProject();

    if (!currentProject || !projects[currentProject]) return;

    projects[currentProject].forEach(task => {
        if (!taskContainer.querySelector(`.${task.title.split(' ').join('_')}`)) {
            createTaskElement(taskContainer, task.title, task.date);
        }
    });
}


function getTaskTitle(element) {
    return element.parentNode.parentNode.className.split('_').join(' ');
}

// Helper: Find task index by title
function findTaskIndex(tasks, taskTitle) {
    return tasks.findIndex(task => task.title === taskTitle);
}

export { displayTaskDom, createTaskElement };