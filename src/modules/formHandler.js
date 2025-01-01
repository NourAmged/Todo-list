import { addProject, addTask, getCurrentProject } from "./projectManager";
import img from "../../src/assets/images/icons8-plus-50.png";
import {displayTaskDom} from "./handleDOM"

function createInputField(type, attributes = {}) {
    const input = document.createElement("input");
    input.setAttribute("type", type);
    Object.keys(attributes).forEach((key) => input.setAttribute(key, attributes[key]));
    return input;
}

function createProjectForm() {
    const form = document.createElement("form");
    const textField = createInputField("text", {
        placeholder: "Enter the project name",
        id: "project-name-input",
        required: true,
        maxlength: 15,
    });
    const submitBtn = createInputField("submit", { value: "Add" });
    const cancelBtn = createInputField("button", { value: "Cancel" });

    form.appendChild(textField);
    form.appendChild(submitBtn);
    form.appendChild(cancelBtn);

    return { form, textField, cancelBtn, submitBtn };
}

function handleProjectFormSubmission(formRef, textField, container, displayProject) {
    formRef.form.addEventListener("submit", (e) => {
        e.preventDefault();
        const projectName = textField.value.trim();
        addProject(projectName);
        container.removeChild(formRef.form);
        displayProject();
        formRef.form = null;
    });
}

function createTask() {
    const taskContainer = document.querySelector(".tasks");
    const existingTaskButton = taskContainer.querySelector(".task-form");

    if (!existingTaskButton) {
        const task = document.createElement("div");
        task.className = "task-form";

        const myImg = new Image();
        myImg.src = img;
        myImg.alt = "Add Task Icon";
        myImg.style.width = "32px";
        myImg.style.height = "32px";

        task.appendChild(myImg);
        const text = document.createTextNode("Add Task");
        task.appendChild(text);
        taskContainer.appendChild(task);
    }

    taskContainer.addEventListener("click", function handleTaskClick(event) {
        if (
            event.target &&
            (event.target.matches(".task-form") || event.target === taskContainer.querySelector(".task-form img")) &&
            !taskContainer.querySelector("form")
        ) {
            const form = document.createElement("form");
            const textField = document.createElement("input");
            const today = new Date().toISOString().split("T")[0];
            const dateField = document.createElement("input");
            const submitBtn = document.createElement("input");
            const cancelBtn = document.createElement("input");

            textField.setAttribute("type", "text");
            textField.setAttribute("placeholder", "Enter the task title");
            textField.setAttribute("required", true);
            textField.setAttribute("maxlength", 15);

            dateField.setAttribute("type", "date");
            dateField.setAttribute("id", "date");
            dateField.setAttribute("min", today);

            submitBtn.setAttribute("type", "submit");
            submitBtn.setAttribute("value", "Add");

            cancelBtn.setAttribute("type", "button");
            cancelBtn.setAttribute("value", "Cancel");

            form.appendChild(textField);
            form.appendChild(dateField);
            form.appendChild(submitBtn);
            form.appendChild(cancelBtn);

            taskContainer.appendChild(form);

            cancelBtn.addEventListener("click", () => {
                taskContainer.removeChild(form);
            });
            const projectName = getCurrentProject();
            submitTask(form, projectName, textField, dateField, taskContainer);
        }
    });
}


function submitTask(form, projectName, textField, dateField, container) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = textField.value.trim();
        const date = dateField.value || null;
        addTask(projectName, title, date);
        container.removeChild(form);
        displayTaskDom();

    });
}


export { createProjectForm, handleProjectFormSubmission, createTask };
