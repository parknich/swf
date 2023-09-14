const response = await fetch(
    "https://api.github.com/repos/parknich/swf/contents/swf/"
);
const fileData = await response.json();
const statusBox = document.getElementById("status");
const submitButton = document.getElementById("submit");
const selectBox = document.getElementById("selectBox");
const textarea = document.getElementById("textareaBox");
statusBox.innerHTML = "running JS";


input.onchange = async () => {
    selectBox.innerHTML = "select game";
    folder = "/swf/";

    for (let file of fileData) {
        const fileList = [];
        fileList.push(file.path);
        statusBox.innerHTML = "adding; ${file.name} to dropdown box.";
    }
};
let swf;
selectBox.onchange = () => {
    textarea.value = fileList[selectBox.value];
    swf = fileList[selectBox.value];
};

submitButton.onclick = () => {
    statusBox.innerHTML = "button clicked"
};
