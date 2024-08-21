const inputbox = document.getElementById("input-box");
const list = document.getElementById("list-container");

document.getElementById('but').onclick = function addtask(){
    addTask();
};

inputbox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask(){
    if(inputbox.value === ''){
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        li.appendChild(span);
    }
    inputbox.value = "";
    savedata();
}

list.addEventListener("click", function(e) {
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata(){
    localStorage.setItem("data", list.innerHTML);
}

function showdata(){
    list.innerHTML = localStorage.getItem("data");
}

showdata();
