let left_div = document.querySelector("#left");
let right_div = document.querySelector("#right");

let chosen = "World";

function show_pics(level) {
    left_div.innerHTML = "";
    let pic1 = document.createElement("img");
    pic1.src = "img/" + level["1"]["Picture"];
    let tag1 = document.createElement("h3");
    let text1 = document.createTextNode(level[1]["Caption"]);
    tag1.appendChild(text1);
    left_div.appendChild(pic1);
    left_div.appendChild(tag1);
    left_div.addEventListener("click", left_listener);

    right_div.innerHTML = "";
    let pic2 = document.createElement("img");
    pic2.src = "img/" + level["2"]["Picture"];
    let tag2 = document.createElement("h3");
    let text2 = document.createTextNode(level["2"]["Caption"]);
    tag2.appendChild(text2);
    right_div.appendChild(pic2);
    right_div.appendChild(tag2);
    right_div.addEventListener("click", right_listener);
}

show_pics(data[chosen]);






function left_listener() {
    let currentChoice = data[chosen];
    let newChoiceName = currentChoice["1"]["Next"];
    let newChoice = data[newChoiceName];
    show_pics(newChoice);
}

function right_listener() {
    let currentChoice = data[chosen];
    let newChoiceName = currentChoice["2"]["Next"];
    let newChoice = data[newChoiceName];
    show_pics(newChoice);
}