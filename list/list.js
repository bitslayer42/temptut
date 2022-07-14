let an_array = ["one","two","three","four","five","six"]

document.querySelector("button").addEventListener("click", (event) => {
    for (value of an_array) {
        let results_el = document.querySelector("#"+value);
        results_el.innerHTML = value;
    }
  });