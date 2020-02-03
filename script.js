var task = document.getElementById('task');
var unList = document.getElementById('unList');
var li = document.getElementsByTagName('li');


function displayTask() {
	//unList.innerHTML += '<li ' + 'id=' + task.value + '>' + task.value + '<button id=' + task.value +' onclick="done()">Done</button>'  + '<button id=' + task.value +' onclick="edit()">Edit</button>' + '<button id=' + task.value +' onclick="deleteItem()">Delete</button>' + '</li>';
	// task.value = "";
	if (li.length > 0) {
		for (var i = 0; i < li.length; i++) {
			if (li[i].innerText.includes(task.value)) {
				task.value = "";
			}
		}
	}	
	if (task.value === "") {
		task.value = "";
	} else {
		unList.innerHTML += '<li ' + 'id=' + task.value + '>' + task.value + '<button id=' + task.value +' onclick="done()">Done</button>'  + '<button id=' + task.value +' onclick="edit()">Edit</button>' + '<button id=' + task.value +' onclick="deleteItem()">Delete</button>' + '</li>';
		task.value = "";
	}
		
}


function done() {
	var id = event.srcElement.id;
	for (var i = 0; i < li.length; i++) {
		// console.log(li[i].id, li[i].innerText);
		if (li[i].innerText.includes(id)) {
			if(li[i].style.textDecoration === "line-through") {
				li[i].style.textDecoration="None";
			} else {
				li[i].style.textDecoration="line-through";
			}	
		}
	}	
}

function edit() {
	var id = event.srcElement.id;
	for (var i = 0; i < li.length; i++) {
		if (li[i].innerText.includes(id)) {
			task.value = li[i].innerHTML.split("<button")[0];
			li[i].innerHTML = " ";	
		}
	}
}


function deleteItem() {
	var id = event.srcElement.id;
	for (var i = 0; i < li.length; i++) {
		if (li[i].innerText.includes(id)) {
			li[i].innerHTML = " ";	
		}
	}	
}


function clearAll() {
	unList.innerHTML = " ";
}



