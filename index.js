document.getElementById("status").value = "js ran"
console.log("js ran")
const response = await fetch(
    "https://api.github.com/repos/parknich/swf/contents/swf/"
);
const fileData = await response.json();
const statusBox = document.getElementById("status");
const submitButton = document.getElementById("submit");
const selectBox = document.getElementById("selectBox");
const textarea = document.getElementById("textareaBox");
statusBox.value = "running JS";
console.log("running JS")
const fileList = [];

for (let file of fileData) {
    console.log(file.name)
    console.log(file.path)
    console.log(fileList)
    fileList.push(file.path);
    option = new Option(file.name, file.path);
    selectBox.appendChild(option);
    statusBox.value = "adding; ${file.name} to dropdown box.";
    console.log("adding; ${file.name} to dropdown box.");
};
let swf;
selectBox.onchange = () => {
    textarea.value = fileList[selectBox.value];
    swf = fileList[selectBox.value];
    console.log("selectBox.onchange triggered");
};

submitButton.onclick = () => {
    statusBox.value = "button clicked"
    console.log("button clicked")
};
