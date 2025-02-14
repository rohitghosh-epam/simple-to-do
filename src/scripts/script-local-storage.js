
let div = function (val) {
    let div = document.createElement("div");
    div.className = 'flex flex-row justify-around';

    let pText = document.createElement("p");

    let buttons = document.createElement("div");
    buttons.className = 'flex flex-row gap-5';

    let updateButton = document.createElement("button"); 
    updateButton.className = 'update-btn text-white hover:pointer px-5 py-2 rounded bg-[#008CBA]';
    let deleteButton = document.createElement("button");
    deleteButton.className = 'delete-btn text-white hover:pointer px-5 py-2 rounded bg-[#f44336]';

    pText.textContent = val;
    updateButton.textContent = "Update";
    deleteButton.textContent = "Delete";

    buttons.appendChild(updateButton);
    buttons.appendChild(deleteButton);
    div.appendChild(pText);
    div.appendChild(buttons);

    return div;
}

function display() {

}

function add_item() {
    
}

function delete_item() {

}

function update_item() {

}

// let tasks = new Set();
// let editable = false;

// function updateStorage(){
//     if(tasks.size === 0) {

//     }
//     // const items = localStorage.getItem("tasks");
//     // if(!items) {
//     //     let input = JSON.stringify(tasks);
//     //     localStorage.setItem("tasks", input);
//     // }
//     // else {
//     //     tasks = JSON.parse(items);
//     //     console.log(tasks);
//     // }
// }

// function load() {

//     updateStorage();

//     document.querySelector(".container").innerHTML = '';

//     let top_text = document.createElement("p");
//     top_text.className = 'w-full flex place-content-start text-xl underline underline-offset-5 ';
//     top_text.textContent = "Task List:";
//     document.querySelector(".container").append(top_text);

//     for(let val of tasks) {
//         console.log(val);
//         let div = document.createElement("div");
//         div.className = 'flex flex-row justify-around';

//         let pText = document.createElement("p");

//         let buttons = document.createElement("div");
//         buttons.className = 'flex flex-row gap-5';

//         let updateButton = document.createElement("button"); 
//         updateButton.className = 'update-btn text-white hover:pointer px-5 py-2 rounded bg-[#008CBA]';
//         let deleteButton = document.createElement("button");
//         deleteButton.className = 'delete-btn text-white hover:pointer px-5 py-2 rounded bg-[#f44336]';

//         pText.textContent = val;
//         updateButton.textContent = "Update";
//         deleteButton.textContent = "Delete";

//         deleteButton.onclick = function() {
//             delete_item(pText.textContent);
//         }

//         updateButton.onclick = function() {
//             if (!editable) {
//                 pText.contentEditable = "true";
//                 pText.classList.add("editing");
//                 pText.focus();  
//                 updateButton.textContent = "Save";
//                 editable = true;
//                 document.addEventListener('click', outsideClickListener);
//             } 
//             update_item(val, pText.textContent);
//         };

//         buttons.appendChild(updateButton);
//         buttons.appendChild(deleteButton);
//         div.appendChild(pText);
//         div.appendChild(buttons);
//         console.log(div);
//         document.querySelector(".container").append(div);
//     }
// }

// window.onload = function() {
//     load();
// }

// function add_item() {
//     let text = document.getElementById("text");
//     if(text.value === '') {
//         alert("Write Something!");
//         return;
//     }

//     else {
//         tasks.add(text.value);
//     }

//     let input = Array.from(tasks);
//     input = JSON.stringify(input);
//     localStorage.setItem("tasks", input);
//     load();
// }

// function delete_item(val) {
//     tasks = tasks.delete(val);
//     // let input = Array.from(tasks);
//     // input = JSON.stringify(input);
//     // localStorage.setItem("tasks", input);
//     load();
// }

// function update_item(oldvalue, newValue) {

//     if (newValue.textContent.trim() === '') {
//         div.remove();
//     } 
//     else {
//         pText.contentEditable = "false";
//         pText.classList.remove("editing");
//         updateButton.textContent = "Update";
//         editable = false;
//         tasks = tasks.delete(oldvalue);
//         tasks.add(newValue);
//         let input = Array.from(tasks);
//         input = JSON.stringify(input);
//         localStorage.setItem("tasks", input);
//     }
//     load();
// }