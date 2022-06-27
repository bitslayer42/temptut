document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.target).entries());
  console.log(data);
  let results_el = document.querySelector("div#result");
  results_el.innerHTML = JSON.stringify(data);
  alert(data.username)
});

