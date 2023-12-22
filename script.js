const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//if you add a empty string
function addTask(){
    if(inputBox.value === ""){
        alert("I'm waiting...")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value=""
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

//in order to save the data to the local storage

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

//in order to have the data reappear once the app is reopened

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}

//here the function is called and shows the task even if it is refreshed or closed

showTask();