/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_handleDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/handleDOM */ \"./src/modules/handleDOM.js\");\n// class ProjectManager {\n//     constructor(projectContainer, taskTypeElement) {\n//       this.projectContainer = projectContainer;\n//       this.taskTypeElement = taskTypeElement;\n//       this.projects = [];\n//       this.projectJson = [];\n//     }\n  \n//     addProject(projectName) {\n//       const project = new Project(\n//         projectName,\n//         this.projectContainer,\n//         this.taskTypeElement,\n//         this,\n//       );\n//       this.projects.push(project);\n//       this.projectJson.push({\n//         name: projectName,\n//       });\n//       project.render();\n//     }\n  \n//     removeProject(projectName) {\n//       const index = this.projectJson.findIndex((p) => p.name === projectName);\n//       if (index !== -1) {\n//         this.projects[index].remove();\n//         this.projectJson.splice(index, 1);\n//         this.projects.splice(index, 1);\n//         if (this.projects.length === 0) {\n//           this.taskTypeElement.textContent = \"All Task\";\n//         }\n//       }\n//     }\n  \n//     populateStorage() {\n//       localStorage.setItem(\n//         \"projects\",\n//         JSON.stringify(this.projects[this.projects - 1]),\n//       );\n//       localStorage.setItem(\n//         \"projectJson\",\n//         JSON.stringify(this.projectJson[this.projectJson - 1]),\n//       );\n//     }\n  \n//     updateTaskType(projectName) {\n//       this.taskTypeElement.textContent = projectName;\n//     }\n//   }\n  \n//   class Project {\n//     constructor(name, projectContainer, taskTypeElement, manager) {\n//       this.name = name;\n//       this.projectContainer = projectContainer;\n//       this.taskTypeElement = taskTypeElement;\n//       this.manager = manager;\n//       this.element = null;\n//     }\n  \n//     render() {\n//       this.element = document.createElement(\"div\");\n//       const span = document.createElement(\"span\");\n//       const removeBtn = document.createElement(\"input\");\n  \n//       this.element.classList.add(\"project-list\");\n//       span.textContent = this.name;\n  \n//       removeBtn.setAttribute(\"value\", \"Remove\");\n//       removeBtn.setAttribute(\"type\", \"button\");\n  \n//       this.element.appendChild(span);\n//       this.element.appendChild(removeBtn);\n//       this.projectContainer.appendChild(this.element);\n  \n//       removeBtn.addEventListener(\"click\", (e) => {\n//         e.stopPropagation();\n//         this.manager.removeProject(this.name);\n//       });\n  \n//       this.element.addEventListener(\"click\", () => {\n//         this.manager.updateTaskType(this.name);\n//       });\n//     }\n  \n//     remove() {\n//       this.projectContainer.removeChild(this.element);\n//     }\n//   }\n  \n//   class FormManager {\n//     constructor(projectManager, addButton) {\n//       this.projectManager = projectManager;\n//       this.addButton = addButton;\n//       this.form = null;\n  \n//       this.addButton.addEventListener(\"click\", () => {\n//         if (!this.form) {\n//           this.createForm();\n//         }\n//       });\n//     }\n  \n//     createForm() {\n//       this.form = document.createElement(\"form\");\n//       const textField = document.createElement(\"input\");\n//       const submitBtn = document.createElement(\"input\");\n//       const cancelBtn = document.createElement(\"input\");\n  \n//       textField.setAttribute(\"type\", \"text\");\n//       textField.setAttribute(\"placeholder\", \"Enter the project name\");\n//       textField.setAttribute(\"id\", \"project-name\");\n//       textField.setAttribute(\"required\", true);\n//       textField.setAttribute(\"maxlength\", 15);\n  \n//       submitBtn.setAttribute(\"type\", \"submit\");\n//       submitBtn.setAttribute(\"value\", \"Add\");\n  \n//       cancelBtn.setAttribute(\"type\", \"button\");\n//       cancelBtn.setAttribute(\"value\", \"Cancel\");\n  \n//       this.form.appendChild(textField);\n//       this.form.appendChild(submitBtn);\n//       this.form.appendChild(cancelBtn);\n//       this.projectManager.projectContainer.appendChild(this.form);\n  \n//       cancelBtn.addEventListener(\"click\", () => {\n//         this.removeForm();\n//       });\n  \n//       this.form.addEventListener(\"submit\", (e) => {\n//         e.preventDefault();\n//         const projectName = textField.value;\n//         this.projectManager.addProject(projectName);\n//         this.removeForm();\n//         this.projectManager.populateStorage();\n//       });\n//     }\n  \n//     removeForm() {\n//       this.projectManager.projectContainer.removeChild(this.form);\n//       this.form = null;\n//     }\n//   }\n  \n//   class SidebarManager {\n//     constructor(sidebar, drawerButton) {\n//       this.sidebar = sidebar;\n//       this.drawerButton = drawerButton;\n  \n//       this.drawerButton.addEventListener(\"click\", () => {\n//         this.toggleSidebar();\n//       });\n//     }\n  \n//     toggleSidebar() {\n//       this.sidebar.style.display =\n//         this.sidebar.style.display === \"none\" ? \"block\" : \"none\";\n//     }\n//   }\n  \n//   const projectContainer = document.querySelector(\".projects\");\n//   const taskTypeElement = document.querySelector(\"#task-type\");\n//   const addButton = document.querySelector(\"#add-project\");\n//   const sidebar = document.querySelector(\".side-bar\");\n//   const drawerButton = document.querySelector(\".drawer-icon\");\n  \n//   const projectManager = new ProjectManager(projectContainer, taskTypeElement);\n//   new FormManager(projectManager, addButton);\n//   new SidebarManager(sidebar, drawerButton);\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    (0,_modules_handleDOM__WEBPACK_IMPORTED_MODULE_0__.projectDOM)();\n    (0,_modules_handleDOM__WEBPACK_IMPORTED_MODULE_0__.sideBar)();\n    (0,_modules_handleDOM__WEBPACK_IMPORTED_MODULE_0__.displayTask)();\n    (0,_modules_handleDOM__WEBPACK_IMPORTED_MODULE_0__.sideBarSection)();\n});\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/createTaskDom.js":
/*!**************************************!*\
  !*** ./src/modules/createTaskDom.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTaskElement: () => (/* binding */ createTaskElement),\n/* harmony export */   displayTaskDom: () => (/* binding */ displayTaskDom)\n/* harmony export */ });\n/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectManager */ \"./src/modules/projectManager.js\");\n/* harmony import */ var _src_assets_images_icons8_star_48_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/assets/images/icons8-star-48(1).png */ \"./src/assets/images/icons8-star-48(1).png\");\n/* harmony import */ var _src_assets_images_icons8_star_48_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/assets/images/icons8-star-48.png */ \"./src/assets/images/icons8-star-48.png\");\n\n\n\n\n\n\nfunction taskStat(removeBtn, star, checkedBtn) {\n    const taskContainer = document.querySelector('.tasks');\n    const projectName = (0,_projectManager__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)();\n\n    removeBtn.addEventListener('click', () => {\n        const taskTitle = getTaskTitle(removeBtn);\n        const taskIndex = findTaskIndex(_projectManager__WEBPACK_IMPORTED_MODULE_0__.projects[projectName], taskTitle);\n\n        if (taskIndex !== -1) {\n            _projectManager__WEBPACK_IMPORTED_MODULE_0__.projects[projectName].splice(taskIndex, 1);\n            const task = document.querySelector(`.${taskTitle.split(' ').join('_')}`);\n            (0,_projectManager__WEBPACK_IMPORTED_MODULE_0__.saveProjectsToLocalStorage)();\n            taskContainer.removeChild(task);\n\n        }\n    });\n\n    star.addEventListener('click', () => {\n        toggleImportantStatus(projectName, star);\n        (0,_projectManager__WEBPACK_IMPORTED_MODULE_0__.saveProjectsToLocalStorage)(); \n    });\n\n    checkedBtn.addEventListener('click', () => {\n        toggleCompletionStatus(projectName, checkedBtn);\n        (0,_projectManager__WEBPACK_IMPORTED_MODULE_0__.saveProjectsToLocalStorage)();\n    });\n    \n}\n\n// Toggle important status of a task\nfunction toggleImportantStatus(projectName, star) {\n    const taskTitle = getTaskTitle(star);\n    const task = _projectManager__WEBPACK_IMPORTED_MODULE_0__.projects[projectName].find(task => task.title === taskTitle);\n\n    if (task) {\n        task.important = task.important ? 0 : 1;\n        star.src = task.important ? _src_assets_images_icons8_star_48_png__WEBPACK_IMPORTED_MODULE_2__ : _src_assets_images_icons8_star_48_1_png__WEBPACK_IMPORTED_MODULE_1__;\n    }\n}\n\n// Toggle completion status of a task\nfunction toggleCompletionStatus(projectName, checkedBtn) {\n    const taskTitle = getTaskTitle(checkedBtn);\n    const task = _projectManager__WEBPACK_IMPORTED_MODULE_0__.projects[projectName].find(task => task.title === taskTitle);\n\n    if (task) {\n        const titleElement = checkedBtn.nextSibling;\n        task.finished = task.finished ? 0 : 1;\n        checkedBtn.style.backgroundColor = task.finished ? 'black' : 'white';\n        titleElement.style.textDecorationLine = task.finished ? 'line-through' : 'none';\n    }\n}\n\n// Create and append a task element to the DOM\nfunction createTaskElement(taskContainer, taskTitle, taskDate) {\n    const task = document.createElement('div');\n    const title = document.createElement('p');\n    const container = document.createElement('span');\n    const date = document.createElement('p');\n    const removeBtn = document.createElement('input');\n    const contain = document.createElement('span');\n    const checkedBtn = document.createElement('p');\n    const star = new Image();\n    const projectName = (0,_projectManager__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)();\n\n    // Set task attributes and styles\n    setupTaskElement(task, taskTitle, title, date, removeBtn, star, checkedBtn, taskDate);\n\n    // Append task to container\n    container.append(date, star, removeBtn);\n    contain.append(checkedBtn, title);\n    task.append(contain, container);\n    taskContainer.appendChild(task);\n\n    // Update task state based on project data\n    updateTaskState(projectName, taskTitle, star, title, checkedBtn);\n    // Add event listeners\n    taskStat(removeBtn, star, checkedBtn);\n}\n\n// Set up task attributes and default styles\nfunction setupTaskElement(task, taskTitle, title, date, removeBtn, star, checkedBtn, taskDate) {\n    task.className = taskTitle.split(' ').join('_');\n    title.textContent = taskTitle;\n    date.textContent = taskDate || \"No Due Date\";\n    star.src = _src_assets_images_icons8_star_48_1_png__WEBPACK_IMPORTED_MODULE_1__;\n    star.alt = \"Add Task Icon\";\n    star.style.width = \"32px\";\n    star.style.height = \"32px\";\n    removeBtn.value = \"Remove\";\n    removeBtn.type = \"button\";\n    checkedBtn.className = 'checked';\n    checkedBtn.style.backgroundColor = 'white';\n}\n\n// Update task state based on saved data\nfunction updateTaskState(projectName, taskTitle, star, title, checkedBtn) {\n    // const task = projects[projectName]?.find(t => t.title === taskTitle);\n    // if (!task) return;\n\n    // star.src = task.important ? filledStar : outlineStar;\n    // title.style.textDecorationLine = task.finished ? 'line-through' : 'none';\n    // checkedBtn.style.backgroundColor = task.finished ? 'black' : 'white';\n    const project = _projectManager__WEBPACK_IMPORTED_MODULE_0__.projects[projectName];\n\n    for (let i = 0; i < project.length; i++) {\n        if (project[i].important && project[i].title === taskTitle) {\n            star.src = _src_assets_images_icons8_star_48_png__WEBPACK_IMPORTED_MODULE_2__;\n        } else if (project[i].title === taskTitle)\n            star.src = _src_assets_images_icons8_star_48_1_png__WEBPACK_IMPORTED_MODULE_1__;\n        if (!project[i].finished && project[i].title === taskTitle) {\n            const title = checkedBtn.nextSibling;\n            title.style.textDecorationLine = 'none';\n            checkedBtn.style.backgroundColor = 'white';\n        } else if (project[i].title === taskTitle) {\n            title.style.textDecorationLine = 'line-through';\n            checkedBtn.style.backgroundColor = 'black';\n        }\n    }\n}\n\n// Display tasks for the current project\nfunction displayTaskDom() {\n    const taskContainer = document.querySelector('.tasks');\n    const currentProject = (0,_projectManager__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)();\n\n    if (!currentProject || !_projectManager__WEBPACK_IMPORTED_MODULE_0__.projects[currentProject]) return;\n\n    _projectManager__WEBPACK_IMPORTED_MODULE_0__.projects[currentProject].forEach(task => {\n        if (!taskContainer.querySelector(`.${task.title.split(' ').join('_')}`)) {\n            createTaskElement(taskContainer, task.title, task.date);\n        }\n    });\n}\n\n\nfunction getTaskTitle(element) {\n    return element.parentNode.parentNode.className.split('_').join(' ');\n}\n\n// Helper: Find task index by title\nfunction findTaskIndex(tasks, taskTitle) {\n    return tasks.findIndex(task => task.title === taskTitle);\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/createTaskDom.js?");

/***/ }),

/***/ "./src/modules/formHandler.js":
/*!************************************!*\
  !*** ./src/modules/formHandler.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProjectForm: () => (/* binding */ createProjectForm),\n/* harmony export */   createTask: () => (/* binding */ createTask),\n/* harmony export */   handleProjectFormSubmission: () => (/* binding */ handleProjectFormSubmission)\n/* harmony export */ });\n/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectManager */ \"./src/modules/projectManager.js\");\n/* harmony import */ var _src_assets_images_icons8_plus_50_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/assets/images/icons8-plus-50.png */ \"./src/assets/images/icons8-plus-50.png\");\n/* harmony import */ var _handleDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleDOM */ \"./src/modules/handleDOM.js\");\n\n\n\n\nfunction createInputField(type, attributes = {}) {\n    const input = document.createElement(\"input\");\n    input.setAttribute(\"type\", type);\n    Object.keys(attributes).forEach((key) => input.setAttribute(key, attributes[key]));\n    return input;\n}\n\nfunction createProjectForm() {\n    const form = document.createElement(\"form\");\n    const textField = createInputField(\"text\", {\n        placeholder: \"Enter the project name\",\n        id: \"project-name-input\",\n        required: true,\n        maxlength: 15,\n    });\n    const submitBtn = createInputField(\"submit\", { value: \"Add\" });\n    const cancelBtn = createInputField(\"button\", { value: \"Cancel\" });\n\n    form.appendChild(textField);\n    form.appendChild(submitBtn);\n    form.appendChild(cancelBtn);\n\n    return { form, textField, cancelBtn, submitBtn };\n}\n\nfunction handleProjectFormSubmission(formRef, textField, container, displayProject) {\n    formRef.form.addEventListener(\"submit\", (e) => {\n        e.preventDefault();\n        const projectName = textField.value.trim();\n        (0,_projectManager__WEBPACK_IMPORTED_MODULE_0__.addProject)(projectName);\n        container.removeChild(formRef.form);\n        displayProject();\n        formRef.form = null;\n    });\n}\n\nfunction createTask() {\n    const taskContainer = document.querySelector(\".tasks\");\n    const existingTaskButton = taskContainer.querySelector(\".task-form\");\n\n    if (!existingTaskButton) {\n        const task = document.createElement(\"div\");\n        task.className = \"task-form\";\n\n        const myImg = new Image();\n        myImg.src = _src_assets_images_icons8_plus_50_png__WEBPACK_IMPORTED_MODULE_1__;\n        myImg.alt = \"Add Task Icon\";\n        myImg.style.width = \"32px\";\n        myImg.style.height = \"32px\";\n\n        task.appendChild(myImg);\n        const text = document.createTextNode(\"Add Task\");\n        task.appendChild(text);\n        taskContainer.appendChild(task);\n    }\n\n    taskContainer.addEventListener(\"click\", function handleTaskClick(event) {\n        if (\n            event.target &&\n            (event.target.matches(\".task-form\") || event.target === taskContainer.querySelector(\".task-form img\")) &&\n            !taskContainer.querySelector(\"form\")\n        ) {\n            const form = document.createElement(\"form\");\n            const textField = document.createElement(\"input\");\n            const today = new Date().toISOString().split(\"T\")[0];\n            const dateField = document.createElement(\"input\");\n            const submitBtn = document.createElement(\"input\");\n            const cancelBtn = document.createElement(\"input\");\n\n            textField.setAttribute(\"type\", \"text\");\n            textField.setAttribute(\"placeholder\", \"Enter the task title\");\n            textField.setAttribute(\"required\", true);\n            textField.setAttribute(\"maxlength\", 15);\n\n            dateField.setAttribute(\"type\", \"date\");\n            dateField.setAttribute(\"id\", \"date\");\n            dateField.setAttribute(\"min\", today);\n\n            submitBtn.setAttribute(\"type\", \"submit\");\n            submitBtn.setAttribute(\"value\", \"Add\");\n\n            cancelBtn.setAttribute(\"type\", \"button\");\n            cancelBtn.setAttribute(\"value\", \"Cancel\");\n\n            form.appendChild(textField);\n            form.appendChild(dateField);\n            form.appendChild(submitBtn);\n            form.appendChild(cancelBtn);\n\n            taskContainer.appendChild(form);\n\n            cancelBtn.addEventListener(\"click\", () => {\n                taskContainer.removeChild(form);\n            });\n            const projectName = (0,_projectManager__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)();\n            submitTask(form, projectName, textField, dateField, taskContainer);\n        }\n    });\n}\n\n\nfunction submitTask(form, projectName, textField, dateField, container) {\n    form.addEventListener(\"submit\", (e) => {\n        e.preventDefault();\n        const title = textField.value.trim();\n        const date = dateField.value || null;\n        (0,_projectManager__WEBPACK_IMPORTED_MODULE_0__.addTask)(projectName, title, date);\n        container.removeChild(form);\n        (0,_handleDOM__WEBPACK_IMPORTED_MODULE_2__.displayTaskDom)();\n\n    });\n}\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/formHandler.js?");

/***/ }),

/***/ "./src/modules/handleDOM.js":
/*!**********************************!*\
  !*** ./src/modules/handleDOM.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayTask: () => (/* binding */ displayTask),\n/* harmony export */   displayTaskDom: () => (/* reexport safe */ _createTaskDom__WEBPACK_IMPORTED_MODULE_2__.displayTaskDom),\n/* harmony export */   projectDOM: () => (/* binding */ projectDOM),\n/* harmony export */   sideBar: () => (/* binding */ sideBar),\n/* harmony export */   sideBarSection: () => (/* binding */ sideBarSection)\n/* harmony export */ });\n/* harmony import */ var _formHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formHandler */ \"./src/modules/formHandler.js\");\n/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectManager */ \"./src/modules/projectManager.js\");\n/* harmony import */ var _createTaskDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTaskDom */ \"./src/modules/createTaskDom.js\");\n// Import necessary modules and assets\n\n\n\n\n// Manage project creation and listing\nfunction projectDOM() {\n    const addName = document.getElementById(\"add-project\");\n    const projectContainer = document.querySelector(\".project-list-container\");\n    const formRef = { form: null };\n\n    addName.addEventListener(\"click\", () => {\n        if (!formRef.form) {\n            const { form: newForm, textField, cancelBtn } = (0,_formHandler__WEBPACK_IMPORTED_MODULE_0__.createProjectForm)();\n            formRef.form = newForm;\n\n            // Cancel button to remove form\n            cancelBtn.addEventListener(\"click\", () => {\n                projectContainer.removeChild(formRef.form);\n                formRef.form = null;\n            });\n\n            // Handle form submission\n            (0,_formHandler__WEBPACK_IMPORTED_MODULE_0__.handleProjectFormSubmission)(formRef, textField, projectContainer, () => displayProjects(projectContainer));\n            projectContainer.appendChild(formRef.form);\n            return;\n        }\n    });\n\n    if(_projectManager__WEBPACK_IMPORTED_MODULE_1__.projects != null){\n        displayProjects(projectContainer)\n    }\n}\n\n// Display projects in the project list\nfunction displayProjects(projectContainer) {\n    // Clear existing project list\n    projectContainer.querySelectorAll(\".project-list\").forEach((el) => el.remove());\n\n    // Add each project to the container\n    Object.keys(_projectManager__WEBPACK_IMPORTED_MODULE_1__.projects).forEach((projectName) => {\n        const projectElement = createProjectElement(projectName, projectContainer);\n        projectContainer.appendChild(projectElement);\n    });\n}\n\n// Helper to create a single project element\nfunction createProjectElement(projectName, projectContainer) {\n    const element = document.createElement(\"div\");\n    const span = document.createElement(\"span\");\n    const removeBtn = document.createElement(\"input\");\n\n    element.classList.add(\"project-list\");\n    span.textContent = projectName;\n\n    removeBtn.setAttribute(\"type\", \"button\");\n    removeBtn.setAttribute(\"value\", \"Remove\");\n    removeBtn.addEventListener(\"click\", () => {\n        delete _projectManager__WEBPACK_IMPORTED_MODULE_1__.projects[projectName];\n        displayProjects(projectContainer);\n        (0,_projectManager__WEBPACK_IMPORTED_MODULE_1__.saveProjectsToLocalStorage)();\n    });\n\n    element.appendChild(span);\n    element.appendChild(removeBtn);\n    return element;\n}\n\n\nfunction displayTask() {\n    const projectsContainer = document.querySelector(\".project-list-container\");\n    const taskType = document.getElementById(\"task-type\");\n    const taskContainer = document.querySelector('.tasks');\n\n    projectsContainer.addEventListener(\"click\", (event) => {\n        const projectElement = event.target.closest(\".project-list\");\n        if (projectElement) {\n            const projectName = projectElement.querySelector(\"span\").textContent;\n            (0,_projectManager__WEBPACK_IMPORTED_MODULE_1__.setCurrentProject)(projectName);\n            taskType.textContent = projectName;\n            taskContainer.innerHTML = \"\"; // Clear tasks\n            (0,_formHandler__WEBPACK_IMPORTED_MODULE_0__.createTask)();\n            (0,_createTaskDom__WEBPACK_IMPORTED_MODULE_2__.displayTaskDom)();\n        }\n    });\n}\n\n// Sidebar toggle functionality\nfunction sideBar() {\n    const icon = document.querySelector(\".drawer-icon\");\n    const sidebar = document.querySelector(\".side-bar\");\n\n    icon.addEventListener(\"click\", () => {\n        sidebar.style.display = sidebar.style.display === \"none\" ? \"block\" : \"none\";\n    });\n}\n\n// Handle sidebar section navigation\nfunction sideBarSection() {\n    const listItems = document.querySelectorAll(\"ul li\");\n    const taskType = document.getElementById(\"task-type\");\n    const taskContainer = document.querySelector('.tasks');\n\n    \n    listItems.forEach((item) => {\n        item.addEventListener(\"click\", () => {\n            const sectionName = item.textContent.trim();\n\n            // Update task type header\n            taskType.textContent = sectionName;\n\n            // Clear current tasks\n            taskContainer.innerHTML = \"\";\n\n            // Check for \"All Tasks\" section\n            if (sectionName === \"All Tasks\") {\n                displayAllTasks(taskContainer);\n            }\n            else if (sectionName === \"Important\") {\n                displayImportantTasks(taskContainer);\n            }\n            else if (sectionName === \"Today\") {\n                displayTodayTasks(taskContainer);\n\n            } else if (sectionName === \"Next 7 Days\") {\n                displayNext7Days(taskContainer);\n\n            }\n        });\n    });\n    displayAllTasks(taskContainer);\n}\n\nfunction displayAllTasks(taskContainer) {\n    // if (!projects && Object.keys(projects).length === 0) {\n    //     return;\n    // }\n\n    // Iterate over each project and its tasks\n    Object.keys(_projectManager__WEBPACK_IMPORTED_MODULE_1__.projects).forEach((projectName) => {\n        _projectManager__WEBPACK_IMPORTED_MODULE_1__.projects[projectName].forEach((task) => {\n            if (task.title) {\n                (0,_projectManager__WEBPACK_IMPORTED_MODULE_1__.setCurrentProject)(projectName);\n                (0,_createTaskDom__WEBPACK_IMPORTED_MODULE_2__.createTaskElement)(taskContainer, task.title, task.date);\n            }\n        });\n    });\n}\n\nfunction displayImportantTasks(taskContainer) {\n    Object.keys(_projectManager__WEBPACK_IMPORTED_MODULE_1__.projects).forEach((projectName) => {\n        _projectManager__WEBPACK_IMPORTED_MODULE_1__.projects[projectName].forEach((task) => {\n            if (task.title && task.important) {\n                (0,_projectManager__WEBPACK_IMPORTED_MODULE_1__.setCurrentProject)(projectName);\n                (0,_createTaskDom__WEBPACK_IMPORTED_MODULE_2__.createTaskElement)(taskContainer, task.title, task.date);\n            }\n        });\n    });\n}\n\nfunction displayTodayTasks(taskContainer) {\n    const todayDate = new Date().toISOString().split(\"T\")[0];\n\n    Object.keys(_projectManager__WEBPACK_IMPORTED_MODULE_1__.projects).forEach((projectName) => {\n        _projectManager__WEBPACK_IMPORTED_MODULE_1__.projects[projectName].forEach((task) => {\n            if (task.title && task.date === todayDate) {\n                (0,_projectManager__WEBPACK_IMPORTED_MODULE_1__.setCurrentProject)(projectName);\n                (0,_createTaskDom__WEBPACK_IMPORTED_MODULE_2__.createTaskElement)(taskContainer, task.title, task.date);\n            }\n        });\n    });\n}\n\nfunction displayNext7Days(taskContainer) {\n    const today = new Date();\n    const sevenDaysLater = new Date();\n    sevenDaysLater.setDate(today.getDate() + 7);\n\n    Object.keys(_projectManager__WEBPACK_IMPORTED_MODULE_1__.projects).forEach((projectName) => {\n        _projectManager__WEBPACK_IMPORTED_MODULE_1__.projects[projectName].forEach((task) => {\n            if (task.date === null)\n                return;\n\n            const taskDate = new Date(task.date);\n            if (task.title && taskDate >= today && taskDate <= sevenDaysLater) {\n                (0,_projectManager__WEBPACK_IMPORTED_MODULE_1__.setCurrentProject)(projectName);\n                (0,_createTaskDom__WEBPACK_IMPORTED_MODULE_2__.createTaskElement)(taskContainer, task.title, task.date);\n            }\n        });\n    });\n}\n\n// Export functions\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/handleDOM.js?");

/***/ }),

/***/ "./src/modules/projectManager.js":
/*!***************************************!*\
  !*** ./src/modules/projectManager.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   getCurrentProject: () => (/* binding */ getCurrentProject),\n/* harmony export */   projects: () => (/* binding */ projects),\n/* harmony export */   saveProjectsToLocalStorage: () => (/* binding */ saveProjectsToLocalStorage),\n/* harmony export */   setCurrentProject: () => (/* binding */ setCurrentProject)\n/* harmony export */ });\nconst projects = JSON.parse(localStorage.getItem(\"projects\")) || {};\n\nlet currentProject = null;\n\nfunction setCurrentProject(name) {\n    currentProject = name;\n}\n\nfunction getCurrentProject() {\n    return currentProject;\n}\n\nfunction addProject(name) {\n    if (!projects[name]) {\n        projects[name] = [];\n        saveProjectsToLocalStorage(); // Save projects to localStorage\n    }\n    return projects;\n}\n\nfunction addTask(projectName, title, date, important = 0, finished = 0) {\n    if (projects[projectName]) {\n        projects[projectName].push({ title, date, important, finished });\n        saveProjectsToLocalStorage(); // Save projects to localStorage\n    }\n    console.log(projects);\n    return projects;\n}\n\nfunction saveProjectsToLocalStorage() {\n    localStorage.setItem(\"projects\", JSON.stringify(projects));\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/projectManager.js?");

/***/ }),

/***/ "./src/assets/images/icons8-plus-50.png":
/*!**********************************************!*\
  !*** ./src/assets/images/icons8-plus-50.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5194bb076373fb7988ae.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/images/icons8-plus-50.png?");

/***/ }),

/***/ "./src/assets/images/icons8-star-48(1).png":
/*!*************************************************!*\
  !*** ./src/assets/images/icons8-star-48(1).png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f231499f9bf846d2524d.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/images/icons8-star-48(1).png?");

/***/ }),

/***/ "./src/assets/images/icons8-star-48.png":
/*!**********************************************!*\
  !*** ./src/assets/images/icons8-star-48.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1422c75c4dcfe17ba9db.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/images/icons8-star-48.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;