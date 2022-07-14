let left_pic = document.querySelector("#left");
let right_pic = document.querySelector("#right");

let left = 1;
let right = 7;

function show_pics() {
    // left_pic.src ="img/Figure" + left + ".jpeg";
    // right_pic.src = "img/Figure" + right + ".jpeg";
    left_pic.src ="https://picsum.photos/id/" + left + "/200/300";
    right_pic.src = "https://picsum.photos/id/" + right + "/200/300";
}

function next_pic(id) {
    if (id == 16) {
        return 1;
    } else {
        return id + 1;
    }
}

show_pics();

left_pic.addEventListener("click", () => {
    left = next_pic(left)
    show_pics();
})

right_pic.addEventListener("click", () => {
    right = next_pic(right)
    show_pics();
})