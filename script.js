const inp = document.getElementById("input-box");
const btn = document.getElementById("btn1");
const ul = document.getElementById("list-items");
const clearAll = document.getElementById("btn2");

btn.addEventListener("click",function(){
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
    inp.value="";
})

btn2.addEventListener("click",function(){
  ul.innerText = "";
})

