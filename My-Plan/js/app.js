const mainTaskList = document.querySelectorAll(".task-name");
const subTaskList = document.querySelectorAll(".subtask");
const subsubTaskList = document.querySelectorAll(".subsubtask");


function toggleDone(tasklist) {

    for (let item of tasklist) {
        item.addEventListener ("click", (e) => item.classList.toggle("done"));
    }
}

toggleDone(subTaskList);
toggleDone(subsubTaskList);
// toggleDone(subTask);
// toggleDone(subsubTask);