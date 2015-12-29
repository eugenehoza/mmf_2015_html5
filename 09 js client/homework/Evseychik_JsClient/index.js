var password_input = document.getElementById('password');
var confirm_password_input = document.getElementById('confirm-password');
var errmsg = document.getElementById('errmsg');
var confirm_password_group = document.getElementById('confirm-password-group');

confirm_password_input.addEventListener("input", confirmPasswordInputEvent);

function confirmPasswordInputEvent() {
	if (password_input.value !== confirm_password_input.value) { 
        		errmsg.innerText = 'password not equals'; 
        		confirm_password_group.classList.add('has-error');
        		confirm_password_group.classList.remove('has-success');
        	} else {
        		errmsg.innerText = 'ok'; 
        		confirm_password_group.classList.remove('has-error');
        		confirm_password_group.classList.add('has-success'); 
        	}

}