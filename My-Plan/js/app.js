const mainTaskList = document.querySelectorAll(".task-name");
const subTaskList = document.querySelectorAll(".subtask");
const subsubTaskList = document.querySelectorAll(".subsubtask");

function toggleDone(tasklist) {
    for (let item of tasklist) {
        var counter = 0;
        item.addEventListener ("click", (e) => {
            item.classList.toggle("done");
            if (item.classList.length === 2) {
                counter++;
                console.log(`one is checked and the counter is ${counter}`);
                if (counter === 2) {
                    console.log("all is checked")
                    item.parentNode.previousElementSibling.classList.add("done");
                }
                else {
                    item.parentNode.previousElementSibling.classList.remove("done");
                }
            }
            else {
                counter--;
                console.log(`one is UNchecked and the counter is ${counter}`)
                item.closest("li").classList.remove("done");
                if (counter === 2) {
                    console.log("all is checked")
                    item.parentNode.previousElementSibling.classList.add("done");
                }
                else {
                    item.parentNode.previousElementSibling.classList.remove("done");
                }
            };


        });
}
}


// toggleDone(subTaskList);
toggleDone(subsubTaskList);
// toggleDone(subTask);
// toggleDone(subsubTask)