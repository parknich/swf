const response = await fetch(
    "https://api.github.com/repos/parknich/swf/contents/swf/"
);
const fileData = await response.json();
const statusBox = document.getElementById("status");
const submitButton = document.getElementById("submit");
const [input, select] = [
    document.getElementById("select"),
    document.querySelector("textarea"),
];
statusBox.innerHTML = "running JS";

function createParam(name, value) {
    const param = document.createElement("param");
    param.setAttribute("name", name);
    param.setAttribute("value", value);
    return param;
}

function fillGame1(swf) {
    const urlParams = new URLSearchParams(window.location.search);
    const defaultSWF = "../swf/ruffled.swf";
    const urlData = urlParams.get("swf") || swf;
    const game = document.createElement("object");
    game.setAttribute("data", urlData);
    game.setAttribute("type", "application/x-shockwave-flash");
    game.setAttribute("width", "100%");
    game.setAttribute("height", "90%");
    game.appendChild(createParam("wmode", "direct"));
    game.appendChild(createParam("allowscriptaccess", "always"));
    game.appendChild(createParam("allowfullscreen", "true"));
    game.appendChild(createParam("allowfullscreeninteractive", "true"));
    game.appendChild(createParam("allownetworkingmode", "all"));
    document.body.appendChild(game);
}
function fillGame(swf) {
    let ruffle = (window.RufflePlayer = window.RufflePlayer || {});
    let player = ruffle.createPlayer();
    let container = document.getElementById("container");
    container.appendChild(player);
    player.load(swf);
}

input.onchange = async () => {
    select.innerHTML = "select game";
    folder = "/swf/";

    for (let file of fileData) {
        const fileList = [];
        const option = new Option(file.name, file.path);
        select.appendChild(option);
        fileList.push(fileData);
        statusBox.innerHTML = "adding; ${file.name} to dropdown box.";
    }
};
let swf;
select.onchange = () => {
    textarea.value = data[select.value];
    swf = data[select.value];
};

submitButton.onclick = () => {
    statusBox.innerHTML = "button clicked"
    fillGame(swf);
};
