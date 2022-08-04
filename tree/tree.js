
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
    let card = document.createElement("div");
    card.className = 'choices';
    card.setAttribute("data-next",card_data.Next);
    let pic = document.createElement("img");
    pic.src = "img/" + card_data.Picture;
    let tag = document.createElement("h3");
    let text = document.createTextNode(card_data.Caption);
    tag.appendChild(text);
    card.appendChild(pic);
    card.appendChild(tag);
    console.log("box", card)
    mainbox.appendChild(card);
    card.addEventListener("click", click_listener);
}

show_pics(data[chosen]);

function click_listener(event) {
    let next = event.currentTarget.getAttribute("data-next")
    show_pics(data[next]);
}
