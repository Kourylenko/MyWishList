var itemList = document.getElementById ("itemList");
var itemText = document.querySelector ("#itemText");
var addItem = document.querySelector ("#addItem");




addItem.addEventListener("click", function() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(itemText.value));
	itemList.appendChild(li);
	itemText.value = "";
});



// генерировать новый предмет в списке

// по клику переносим текст в список айтемов
