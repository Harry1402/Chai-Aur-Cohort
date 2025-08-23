const addbtn = document.getElementById("add-btn");
const todoinput = document.getElementById("todoinput");
const ulitems = document.getElementById("todo-itemscontainer");

addbtn.addEventListener("click", () => {
    const value = todoinput.value;
    console.log(todoinput)

    const li = document.createElement("li");
    li.innerText = value;

    const delbtn = document.createElement("button");
    delbtn.innerText = "Delete";


    delbtn.addEventListener("click", () => {
        li.remove();
    })

    li.appendChild(delbtn);

    todo_itemscontainer.append(li);
    todoinput.value = "  "

})


