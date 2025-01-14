document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    buildToDo(e.target.querySelector("input[type='text']").value)
    form.reset()
  })
});


function buildToDo(todo){
  console.log(todo)
  let li = document.createElement("li");
  let btn = document.createElement("button");
  btn.addEventListener("click", handleDelete)
  btn.textContent = "x"
  li.textContent = `${todo}  `;
  li.appendChild(btn)
  document.querySelector("#tasks").appendChild(li);
}

function handleDelete(e){
  e.target.parentNode.remove()
}