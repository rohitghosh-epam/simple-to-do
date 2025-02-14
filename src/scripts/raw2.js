// var globalLocalStorage = window.localStorage;
// let body_container = document.createElement("div");
// let editable = false;

// function createDiv(val) {
//     let div = document.createElement("div");
//     div.className = 'm-3 flex flex-row justify-around';

//     let pText = document.createElement("p");

//     let buttons = document.createElement("div");
//     buttons.className = 'flex flex-row gap-5';

//     let updateButton = document.createElement("button"); 
//     updateButton.className = 'update-btn text-white hover:pointer px-5 py-2 rounded bg-[#008CBA]';
//     let deleteButton = document.createElement("button");
//     deleteButton.className = 'delete-btn text-white hover:pointer px-5 py-2 rounded bg-[#f44336]';

//     pText.textContent = val;
//     updateButton.textContent = "Update";
//     deleteButton.textContent = "Delete";

//     buttons.appendChild(updateButton);
//     buttons.appendChild(deleteButton);
//     div.appendChild(pText);
//     div.appendChild(buttons);

//     deleteButton.onclick = function() {
//         delete_item(div);
//     } 

//     updateButton.onclick = function() {
//         update_item(pText, updateButton, div);
//     }

//     return div;
// }

// function display() {
//     let storedBody = globalLocalStorage.getItem("body");
//     if (storedBody) {
//         document.querySelector(".container").innerHTML = storedBody;
//         body_container = document.querySelector(".container").firstChild;
//     }
// }

// window.onload = function() {
//     display();
// }

// function add_item() {
//     let text = document.getElementById("text");
//     let div = createDiv(text.value);
//     body_container.appendChild(div);
//     globalLocalStorage.setItem("body", body_container.outerHTML);
//     display();
// }

// function delete_item(div) {
//     div.remove();
//     globalLocalStorage.setItem("body", body_container.outerHTML);
//     display();
// }

// function update_item(pText, updateButton, div) {
//     if (!editable) {
//         pText.contentEditable = "true";
//         pText.classList.add("editing");
//         pText.focus();
//         updateButton.textContent = "Save";
//         editable = true;
//         document.addEventListener('click', function(event) {
//             if (!div.contains(event.target)) {
//                 finalizeEdits(pText, updateButton);
//                 document.removeEventListener('click', outsideClickListener);
//             }
//         });
//     } else {
//         finalizeEdits(pText, updateButton);
//     }
// }

// function finalizeEdits(pText, updateButton) {
//     if (pText.textContent.trim() === '') {
//         pText.parentElement.remove();
//     } else {
//         pText.contentEditable = "false";
//         pText.classList.remove("editing");
//         updateButton.textContent = "Update";
//         editable = false;
//     }
//     globalLocalStorage.setItem("body", body_container.outerHTML);
//     display();
// }
