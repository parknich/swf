document.getElementById("status").value = "js ran"
const response = await fetch(
    "https://api.github.com/repos/parknich/swf/contents/swf/"
);
const fileData = await response.json();
const statusBox = document.getElementById("status");
const submitButton = document.getElementById("submit");
const selectBox = document.getElementById("selectBox");
const textarea = document.getElementById("textareaBox");
statusBox.value = "running JS";
const fileList = [];
function populateSelect() {
    selectBox.value = "select game";
    for (let file of fileData) {
        fileList.push(file.path);
        option = new Option(file.name, file.path);
        selectBox.appendChild(option)
        statusBox.value = "adding; ${file.name} to dropdown box.";
    }
};
populateSelect();
let swf;
selectBox.onchange = () => {
    textarea.value = fileList[selectBox.value];
    swf = fileList[selectBox.value];
};

submitButton.onclick = () => {
    statusBox.value = "button clicked"
};
