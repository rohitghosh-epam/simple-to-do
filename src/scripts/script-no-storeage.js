function action() {
    const text = document.getElementById("text");
    if(text.value === '') {
        alert("Write Something!");
        return;
    }

    let div = document.createElement("div");
    div.className = 'flex flex-row justify-around';

    let pText = document.createElement("p");

    let buttons = document.createElement("div");
    buttons.className = 'flex flex-row gap-5';

    let updateButton = document.createElement("button"); 
    updateButton.className = 'update-btn text-white hover:pointer px-5 py-2 rounded bg-[#008CBA]';
    let deleteButton = document.createElement("button");
    deleteButton.className = 'delete-btn text-white hover:pointer px-5 py-2 rounded bg-[#f44336]';

    pText.textContent = text.value;
    updateButton.textContent = "Update";
    deleteButton.textContent = "Delete";

    buttons.appendChild(updateButton);
    buttons.appendChild(deleteButton);
    div.appendChild(pText);
    div.appendChild(buttons);
    
    document.querySelector(".container").append(div);

    text.value = '';

    deleteButton.onclick = function() {
        div.remove();  
    };

    let editable = false;
    updateButton.onclick = function() {
        if (!editable) {
            pText.contentEditable = "true";
            pText.classList.add("editing");
            pText.focus();  
            updateButton.textContent = "Save";
            editable = true;
            document.addEventListener('click', outsideClickListener);
        } else {
            finalizeEdits();
        }
    };

    function outsideClickListener(event) {
        if (!div.contains(event.target)) {
            finalizeEdits();
            document.removeEventListener('click', outsideClickListener);
        }
    }

    function finalizeEdits() {
        if (pText.textContent.trim() === '') {
            div.remove();
        } else {
            pText.contentEditable = "false";
            pText.classList.remove("editing");
            updateButton.textContent = "Update";
            editable = false;
        }
    }
}
