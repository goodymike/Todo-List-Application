// select all the dom elements
let todoItem = document.querySelector("#input-value");
let addItem = document.querySelector("#button");
let itemsHolder = document.querySelector(".item-container");
let tik = document.querySelector(".check");
let edit = document.querySelector(".edit");
let del = document.querySelector("del");
let clearItem = document.querySelector("#clear-item");


function createItemHolder () {
 
   let checkIcon = document.createElement("i");
   checkIcon.classList.add("fa", "fa-check-circle-o","check");
   
   let editIcon = document.createElement("i");
   editIcon.classList.add("fa", "fa-pencil-square-o","edit");
   
   let deleteIcon = document.createElement("i");
   deleteIcon.classList.add("fa", "fa-times-circle-o","del");

   let checkContainer= document.createElement("div");
   checkContainer.appendChild(checkIcon);

   let editContainer= document.createElement("div");
   editContainer.appendChild(editIcon);

   let deleteContainer= document.createElement("div");
   deleteContainer.appendChild(deleteIcon);
   
   let iconHolder = document.createElement("div");
   iconHolder.classList.add("todo-enter", "item-edits");
   iconHolder.appendChild(checkContainer);
   iconHolder.appendChild(editContainer);
   iconHolder.appendChild(deleteContainer)
    
   let itemInput= document.createElement("input");
   itemInput.classList.add("item-todo");
   //itemInput.setAttribute("disabled",false);
   itemInput.disabled=true;
   itemInput.type="text";
   itemInput.value= todoItem.value;

   let inputHolder = document.createElement("div");
   inputHolder.classList.add("item");
   inputHolder.appendChild(itemInput);

   let inputContainer = document.createElement("div");
   inputContainer.classList.add("todo-input", "items");
   inputContainer.appendChild(inputHolder)

   let itemHolder = document.createElement("div");
   itemHolder.classList.add("tasks");
   itemHolder.appendChild(inputContainer);
   itemHolder.appendChild(iconHolder);

   itemsHolder.appendChild(itemHolder);

   todoItem.value=""

 checkContainer.addEventListener("click",() => {
     if ( itemInput.style.textDecoration=="none") {
        itemInput.style.textDecoration= "line-through";
     } 
    else{
        itemInput.style.textDecoration="none"
    }});
editContainer.addEventListener("click",() => {
    if (itemInput.disabled==true) {
        itemInput.disabled=false;
        itemInput.style.border="1px solid rgb(41, 184, 124)"
        
    }
    else {
        itemInput.disabled=true;
        itemInput.style.border="none";
        }
});
itemInput.addEventListener("keyup",function (e) {
    if (e.keyCode==13) {
        if (itemInput.disabled==true) {
            itemInput.disabled=false;
            itemInput.style.border="1px solid rgb(41, 184, 124)"
        }
        else {itemInput.disabled=true;
            itemInput.style.border="none"}
    }
})
deleteContainer.addEventListener("click", () =>{
    itemsHolder.removeChild(itemHolder)
})
clearItem.addEventListener("click", () =>{
    itemHolder.removeChild(inputContainer);
   itemHolder.removeChild(iconHolder);
})


}

addItem.addEventListener("click",createItemHolder);
todoItem.addEventListener("keyup",function (e) {
    if (e.keyCode==13) {
        createItemHolder()
    }
})

