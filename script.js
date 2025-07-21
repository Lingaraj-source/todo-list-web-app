const inp = document.getElementById("input-box");
const btn = document.getElementById("btn1");
const ul = document.getElementById("list-items");
const clearAll = document.getElementById("btn2");

btn.addEventListener("click", function () {
  const taskText = inp.value.trim();  

  if (taskText === "") {
    alert("Please enter a task before adding.");
    return;  
  }

  let item = document.createElement("li");
  item.innerText = inp.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.classList.add("delete");

  delBtn.addEventListener("click", function () {
    ul.removeChild(item);
  });

  item.appendChild(delBtn);
  ul.appendChild(item);
  inp.value = "";
})

clearAll.addEventListener("click", function () {
  ul.innerText = "";
})

