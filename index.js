

const link = document.querySelector("a");
link.textContent = "Main Asheville Website";
link.href = "https://ashevillenc.gov";

document.querySelector("form").addEventListener("submit", (e) => {
  const data = Object.fromEntries(new FormData(e.target).entries());
  console.log(data);
  document.getElementById("app").innerHTML = `
  <h1>Hello World!</h1>
  <div>
    <a href="https://google.com">Link to Google</a>.
  </div>
  `;
});
