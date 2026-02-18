const toDo = document.getElementById("toDo");

const btnAdd = document.getElementById("btn-add");
const btnEdit = document.getElementById("btn-edit");
const btnDelete = document.getElementById("btn-delete");

const list = []

function handleAdd(){
    list.push(toDo.value);
    console.log("You added: "+ list)
    return list
}

function handleEdit(){
    return list
}

function handleDelete(){
    return list
}


btnAdd.addEventListener("click", handleAdd)
btnEdit.addEventListener("click", handleEdit)
btnDelete.addEventListener("click", handleDelete)
