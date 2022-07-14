document.querySelector("form").addEventListener("submit", (event) => { // This line looks in the html for a form, and listens for when you submit it. Then it calls the function, (the rest of this block.)
  event.preventDefault();  // This is needed because a normal form reloads the page, but since we just want to read the values in JavaScript, we don't want that.
  const data = Object.fromEntries(new FormData(event.target).entries()); // This pulls the form data into the "data" object. Const is just like let, except you can't change the value once it is set.
  console.log(data); // Dispays it on the console (press F12 from the webpage.)
  let results_el = document.querySelector("div#result"); // "div#result" refers to the div with the id "result" in the html. querySelector finds that div and returns it to JavaScript so you can use it.
  results_el.innerHTML = JSON.stringify(data); // JSON.stringify turns the object data to a string of letters, which is put inside div#result.
  alert(data.username) // alert is the pop-up window. Notice that you can pull out one of the elements of an object using a dot. If data is {"username":"Jon","quest":"grail","color":"Red"} then data.username is the string "Jon"
});

