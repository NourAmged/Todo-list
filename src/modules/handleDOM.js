// Import necessary modules and assets
import { createProjectForm, handleProjectFormSubmission, createTask } from "./formHandler";
import { projects, setCurrentProject, saveProjectsToLocalStorage } from "./projectManager";
import { displayTaskDom, createTaskElement } from "./createTaskDom";

// Manage project creation and listing
function projectDOM() {
    const addName = document.getElementById("add-project");
    const projectContainer = document.querySelector(".project-list-container");
    const formRef = { form: null };

    addName.addEventListener("click", () => {
        if (!formRef.form) {
            const { form: newForm, textField, cancelBtn } = createProjectForm();
            formRef.form = newForm;

            // Cancel button to remove form
            cancelBtn.addEventListener("click", () => {
                projectContainer.removeChild(formRef.form);
                formRef.form = null;
            });

            // Handle form submission
            handleProjectFormSubmission(formRef, textField, projectContainer, () => displayProjects(projectContainer));
            projectContainer.appendChild(formRef.form);
            return;
        }
    });

    if(projects != null){
        displayProjects(projectContainer)
    }
}

// Display projects in the project list
function displayProjects(projectContainer) {
    // Clear existing project list
    projectContainer.querySelectorAll(".project-list").forEach((el) => el.remove());

    // Add each project to the container
    Object.keys(projects).forEach((projectName) => {
        const projectElement = createProjectElement(projectName, projectContainer);
        projectContainer.appendChild(projectElement);
    });
}

// Helper to create a single project element
function createProjectElement(projectName, projectContainer) {
    const element = document.createElement("div");
    const span = document.createElement("span");
    const removeBtn = document.createElement("input");

    element.classList.add("project-list");
    span.textContent = projectName;

    removeBtn.setAttribute("type", "button");
    removeBtn.setAttribute("value", "Remove");
    removeBtn.addEventListener("click", () => {
        delete projects[projectName];
        displayProjects(projectContainer);
        saveProjectsToLocalStorage();
    });

    element.appendChild(span);
    element.appendChild(removeBtn);
    return element;
}


function displayTask() {
    const projectsContainer = document.querySelector(".project-list-container");
    const taskType = document.getElementById("task-type");
    const taskContainer = document.querySelector('.tasks');

    projectsContainer.addEventListener("click", (event) => {
        const projectElement = event.target.closest(".project-list");
        if (projectElement) {
            const projectName = projectElement.querySelector("span").textContent;
            setCurrentProject(projectName);
            taskType.textContent = projectName;
            taskContainer.innerHTML = ""; // Clear tasks
            createTask();
            displayTaskDom();
        }
    });
}

// Sidebar toggle functionality
function sideBar() {
    const icon = document.querySelector(".drawer-icon");
    const sidebar = document.querySelector(".side-bar");

    icon.addEventListener("click", () => {
        sidebar.style.display = sidebar.style.display === "none" ? "block" : "none";
    });
}

// Handle sidebar section navigation
function sideBarSection() {
    const listItems = document.querySelectorAll("ul li");
    const taskType = document.getElementById("task-type");
    const taskContainer = document.querySelector('.tasks');

    
    listItems.forEach((item) => {
        item.addEventListener("click", () => {
            const sectionName = item.textContent.trim();

            // Update task type header
            taskType.textContent = sectionName;

            // Clear current tasks
            taskContainer.innerHTML = "";

            // Check for "All Tasks" section
            if (sectionName === "All Tasks") {
                displayAllTasks(taskContainer);
            }
            else if (sectionName === "Important") {
                displayImportantTasks(taskContainer);
            }
            else if (sectionName === "Today") {
                displayTodayTasks(taskContainer);

            } else if (sectionName === "Next 7 Days") {
                displayNext7Days(taskContainer);

            }
        });
    });
    displayAllTasks(taskContainer);
}

function displayAllTasks(taskContainer) {
    // if (!projects && Object.keys(projects).length === 0) {
    //     return;
    // }

    // Iterate over each project and its tasks
    Object.keys(projects).forEach((projectName) => {
        projects[projectName].forEach((task) => {
            if (task.title) {
                setCurrentProject(projectName);
                createTaskElement(taskContainer, task.title, task.date);
            }
        });
    });
}

function displayImportantTasks(taskContainer) {
    Object.keys(projects).forEach((projectName) => {
        projects[projectName].forEach((task) => {
            if (task.title && task.important) {
                setCurrentProject(projectName);
                createTaskElement(taskContainer, task.title, task.date);
            }
        });
    });
}

function displayTodayTasks(taskContainer) {
    const todayDate = new Date().toISOString().split("T")[0];

    Object.keys(projects).forEach((projectName) => {
        projects[projectName].forEach((task) => {
            if (task.title && task.date === todayDate) {
                setCurrentProject(projectName);
                createTaskElement(taskContainer, task.title, task.date);
            }
        });
    });
}

function displayNext7Days(taskContainer) {
    const today = new Date();
    const sevenDaysLater = new Date();
    sevenDaysLater.setDate(today.getDate() + 7);

    Object.keys(projects).forEach((projectName) => {
        projects[projectName].forEach((task) => {
            if (task.date === null)
                return;

            const taskDate = new Date(task.date);
            if (task.title && taskDate >= today && taskDate <= sevenDaysLater) {
                setCurrentProject(projectName);
                createTaskElement(taskContainer, task.title, task.date);
            }
        });
    });
}

// Export functions
export { projectDOM, sideBar, displayTask, sideBarSection, displayTaskDom };
