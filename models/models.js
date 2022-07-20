let left_pic = document.querySelector("#left");
let right_pic = document.querySelector("#right");

let left = 1;
let right = 7;

function show_pics() {
    left_pic.src ="img/Figure" + left + ".jpeg";
    right_pic.src = "img/Figure" + right + ".jpeg";
    // left_pic.src ="https://picsum.photos/id/" + left + "/200/300";
    // right_pic.src = "https://picsum.photos/id/" + right + "/200/300";
}

function next_pic(id) {
    if (id == 16) {
        return 1;
    } else {
        return id + 1;
    }
}

show_pics();

left_pic.addEventListener("click", left_listener)

right_pic.addEventListener("click", right_listener)


function left_listener() {
    left = next_pic(left)
    show_pics();
}

function right_listener() {
    right = next_pic(right)
    show_pics();
}