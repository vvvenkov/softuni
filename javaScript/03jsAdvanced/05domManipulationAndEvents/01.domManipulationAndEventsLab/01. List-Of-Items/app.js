function addItem() {
    //get related elements from DOM
    const input = document.getElementById("newItemText");
    const ul = document.getElementById("items");

    //create new li element 
    const li = document.createElement("li");
    li.textContent = input.value;

    //append li element to DOM
    ul.append(li);

    //clear the entry bar
    input.value = "";

    //focus on input 
    input.focus();
}
