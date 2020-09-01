const subsubTasks = document.querySelectorAll(".subsubtask");
const subTasks = document.querySelectorAll(".subtask");
const mainTasks = document.querySelectorAll(".task-name");

//cross out a done task
function toggleDone(tasks) {
    for (let item of tasks) {
        item.addEventListener ("click", (e) => {
            e.target.classList.toggle("done");
        });
    }
}

function completeFullTask (task) {

}


toggleDone(subsubTasks);
toggleDone(subTasks);
