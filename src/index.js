import { projectDOM, sideBar, displayTask, sideBarSection} from "./modules/handleDOM";
import './style.css';

document.addEventListener("DOMContentLoaded", () => {
    projectDOM();
    sideBar();
    displayTask();
    sideBarSection();
});
