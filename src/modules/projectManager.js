const projects = JSON.parse(localStorage.getItem("projects")) || {};

let currentProject = null;

function setCurrentProject(name) {
    currentProject = name;
}

function getCurrentProject() {
    return currentProject;
}

function addProject(name) {
    if (!projects[name]) {
        projects[name] = [];
        saveProjectsToLocalStorage(); // Save projects to localStorage
    }
    return projects;
}

function addTask(projectName, title, date, important = 0, finished = 0) {
    if (projects[projectName]) {
        projects[projectName].push({ title, date, important, finished });
        saveProjectsToLocalStorage(); // Save projects to localStorage
    }
    console.log(projects);
    return projects;
}

function saveProjectsToLocalStorage() {
    localStorage.setItem("projects", JSON.stringify(projects));
}

export { addProject, addTask, projects, setCurrentProject, getCurrentProject, saveProjectsToLocalStorage };
