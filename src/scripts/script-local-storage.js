// script-local-storage.js
var globalLocalStorage = window.localStorage;
let body_container;

function initializeApp() {
    document.querySelector(".container").innerHTML = '';
    let container = document.querySelector(".container");
    let storedBody = globalLocalStorage.getItem("body");
    if (storedBody) {
        container.innerHTML = storedBody;
        // Ensure body_container is assigned the first DIV inside .container or create a new one if missing
        body_container = container.querySelector("div") || document.createElement("div");
        body_container.innerHTML = storedBody;
        container.appendChild(body_container);
    } else {
        // Create a new DIV and set it as body_container
        body_container = document.createElement("div");
        container.appendChild(body_container);
    }
    bindEventsToDivs();
}

function createDiv(val) {
    let div = document.createElement("div");
    div.className = 'm-3 flex flex-row justify-around';

    let pText = document.createElement("p");
    let buttonsDiv = document.createElement("div");
    buttonsDiv.className = 'flex flex-row gap-5';

    let updateButton = document.createElement("button");
    updateButton.className = 'update-btn text-white hover:pointer px-5 py-2 rounded bg-[#008CBA]';
    updateButton.textContent = "Update";

    let deleteButton = document.createElement("button");
    deleteButton.className = 'delete-btn text-white hover:pointer px-5 py-2 rounded bg-[#f44336]';
    deleteButton.textContent = "Delete";

    pText.textContent = val;
    buttonsDiv.appendChild(updateButton);
    buttonsDiv.appendChild(deleteButton);
    div.appendChild(pText);
    div.appendChild(buttonsDiv);

    return div;
}

function bindEventsToDivs() {
    let divs = document.querySelectorAll(".container > div");
    divs.forEach(div => {
        let pText = div.querySelector("p");
        let updateButton = div.querySelector(".update-btn");
        let deleteButton = div.querySelector(".delete-btn");

        deleteButton.onclick = function() {
            delete_item(div);
        };

        updateButton.onclick = function() {
            update_item(pText, updateButton, div);
        };
    });
}

function add_item() {
    let textInput = document.getElementById("text").value.trim();
    if (textInput === '') {
        alert("Task cannot be empty!");
        return;
    }
    let newDiv = createDiv(textInput);
    body_container.appendChild(newDiv);
    saveToLocalStorage();
    bindEventsToDivs(); // Re-bind events to include new elements
}

function saveToLocalStorage() {
    globalLocalStorage.setItem("body", body_container.innerHTML);
}

function delete_item(div) {
    div.remove();
    saveToLocalStorage();
    bindEventsToDivs(); // Re-bind events after DOM structure change
}

function update_item(pText, updateButton, div) {
    let isEditable = pText.contentEditable === "true";
    if (!isEditable) {
        pText.contentEditable = "true";
        pText.classList.add("editing");
        updateButton.textContent = "Save";

        document.addEventListener('click', function outsideClickListener(event) {
            if (!div.contains(event.target) && event.target !== updateButton) {
                finalizeEdits(pText, updateButton);
                document.removeEventListener('click', outsideClickListener);
            }
        });
    } else {
        finalizeEdits(pText, updateButton);
    }
}

function finalizeEdits(pText, updateButton) {
    if (pText.textContent.trim() === '') {
        pText.parentElement.parentElement.remove();
    } else {
        pText.contentEditable = "false";
        pText.classList.remove("editing");
        updateButton.textContent = "Update";
    }
    saveToLocalStorage();
    bindEventsToDivs(); // Re-bind events after update
}

window.onload = initializeApp;