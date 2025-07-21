const inp = document.getElementById("input-box");
const btn = document.getElementById("btn1");
const ul = document.getElementById("list-items");
const clearAll = document.getElementById("btn2");
const btnDeleteSelected = document.getElementById("btn-delete-selected");

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
  btnDeleteSelected.style.display = "none";
});

btnDeleteSelected.addEventListener("click", function () {
  const checkboxes = document.querySelectorAll(".select-task:checked");
  checkboxes.forEach(cb => {
    const li = cb.closest("li");
    ul.removeChild(li);
  });


  const remaining = document.querySelectorAll(".select-task:checked");
  if (remaining.length === 0) {
    btnDeleteSelected.style.display = "none";
  }
});


function createTaskItem(text) {
  const li = document.createElement("li");


  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("select-task");

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      li.classList.add("selected-task");
    } else {
      li.classList.remove("selected-task");
    }

    const anySelected = document.querySelectorAll(".select-task:checked").length > 0;
    btnDeleteSelected.style.display = anySelected ? "inline-block" : "none";
  });

  const textSpan = document.createElement("span");
  textSpan.classList.add("task-text");
  textSpan.innerText = text;


  const delBtn = document.createElement("button");
  delBtn.classList.add("delete");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", () => {
    ul.removeChild(li);
    const remaining = document.querySelectorAll(".select-task:checked").length;
    if (remaining === 0) btnDeleteSelected.style.display = "none";
  });

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit");
  editBtn.innerText = "✏️";
  editBtn.addEventListener("click", () => {
    const newText = prompt("Edit your task:", textSpan.innerText);
    if (newText !== null && newText.trim() !== "") {
      textSpan.innerText = newText.trim();
    }
  });

  li.appendChild(checkbox);
  li.appendChild(textSpan);
  li.appendChild(editBtn);
  li.appendChild(delBtn);
  ul.appendChild(li);
}
