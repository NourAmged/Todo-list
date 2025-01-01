import { projectDOM, sideBar, displayTask, sideBarSection} from "./modules/handleDOM";

document.addEventListener("DOMContentLoaded", () => {
    projectDOM();
    sideBar();
    displayTask();
    sideBarSection();
});
