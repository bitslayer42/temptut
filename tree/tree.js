
let mainbox = document.querySelector("#mainbox");

let chosen = "World";

function show_pics(level) {
    mainbox.innerHTML = "";
    for (choicenum in level){  // 'for of' is for arrays, 'for in' iterates the keys of objects
        let card_data = level[choicenum]
        build_card_data(card_data)
    }
}

function build_card_data(card_data) {
    let box = document.createElement("div");
    box.className = 'choices';
    box.setAttribute("data-next",card_data.Next);
    let pic = document.createElement("img");
    pic.src = "img/" + card_data.Picture;
    let tag = document.createElement("h3");
    let text = document.createTextNode(card_data.Caption);
    tag.appendChild(text);
    box.appendChild(pic);
    box.appendChild(tag);
    console.log("box", box)
    mainbox.appendChild(box);
    box.addEventListener("click", click_listener);
}

show_pics(data[chosen]);

function click_listener(event) {
    let next = event.currentTarget.getAttribute("data-next")
    show_pics(data[next]);
}
