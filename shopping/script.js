var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
// var shoppingList = Array.from(document.querySelectorAll("li"));

function inputLength() {
	return input.value.length;
}

function createDeleteButton() {
  var deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.appendChild(document.createTextNode("X"));
  return deleteBtn
}

function createListElement() {
	var li = document.createElement("li");
  var newDeleteBtn = createDeleteButton();
  li.appendChild(document.createTextNode(input.value));
  li.appendChild(newDeleteBtn);
	ul.appendChild(li);
  // shoppingList.push(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDoneItem(e) {
  e.target.classList.toggle("done");
}

function deleteItem(e) {
  var item = e.target.parentElement;
  item.parentElement.removeChild(item);
}

function changeItemStatus(e) {
  if (e.target.tagName === 'LI'){
    toggleDoneItem(e)
  } else if (e.target.classList.contains("delete")) {
    deleteItem(e)
  }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", changeItemStatus);
// shoppingList.forEach(item => item.addEventListener("click", toggleDoneItem));