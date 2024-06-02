function extractText() {
    const list = document.getElementById("items");
    const itemArray = Array.from(list.children);

    const result = itemArray
        .map(li => li.textContent)
        .join("\n");

    const output = document.getElementById("result");
    output.value = result;
}