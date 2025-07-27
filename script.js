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

  createTaskItem(taskText);
  inp.value = "";
});

clearAll.addEventListener("click", function () {
  ul.innerText = "";
});

// Utility function to create a task item
function createTaskItem(text) {
  const li = document.createElement("li");

  const textSpan = document.createElement("span");
  textSpan.classList.add("task-text");
  textSpan.innerText = text;

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.classList.add("delete");
  delBtn.innerText = "⨉";
  delBtn.addEventListener("click", () => {
    ul.removeChild(li);
  });

  li.appendChild(textSpan);
  li.appendChild(delBtn);
  ul.appendChild(li);
}
