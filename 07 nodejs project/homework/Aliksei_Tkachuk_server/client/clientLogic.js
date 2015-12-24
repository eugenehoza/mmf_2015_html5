function unlockTextArea(){
	document.getElementById("text").disabled = false;
}

function save(){
	$.post("/", {text : document.getElementById("text").value}, null, "json");
}