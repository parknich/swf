const response = await fetch(
    "https://api.github.com/repos/parknich/swf/contents/swf/"
);
const fileData = await response.json();
const statusBox = document.getElementById("status");
const submitButton = document.getElementById("submit");
const selectBox = document.getElementById("selectBox")
statusBox.innerHTML = "running JS";


input.onchange = async () => {
    selectBox.innerHTML = "select game";
    folder = "/swf/";

    for (let file of fileData) {
        const fileList = [];
        const option = new Option(file.name, file.path);
        selectBox.appendChild(option);
        fileList.push(file.path);
        statusBox.innerHTML = "adding; ${file.name} to dropdown box.";
    }
};
let swf;
selectBox.onchange = () => {
    textarea.value = data[selectBox.value];
    swf = data[selectBox.value];
};

submitButton.onclick = () => {
    statusBox.innerHTML = "button clicked"
};
