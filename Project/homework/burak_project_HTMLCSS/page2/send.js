function _sendEmail(){
	var toValue = document.getElementById("text1").value;
	var descrValue = document.getElementById("text2").value;
	var textValue = document.getElementById("text").value;

	$.post("", {to : toValue, descr : descrValue, text : textValue});
}