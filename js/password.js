// Поиск несоответствий в пароле
var errLng = document.getElementById('errorLength');
errLng.style.display = 'none';

var errNeeNum = document.getElementById('errorNeedNumbers');
errNeeNum.style.display = 'none';

var errNeeSpec = document.getElementById('errorNeedSpecial');
errNeeSpec.style.display = 'none';

var errDifCase = document.getElementById('errorDifferentCase');
errDifCase.style.display = 'none';

document.getElementById('passwordInput').addEventListener('keyup', () => {
	
    let pass = document.getElementById('passwordInput').value;
    pass = pass.trim();
	
	// Проверка длины пароля
	if (pass.length > 0 && pass.length < 6) errLng.style.display = 'block';
	else errLng.style.display = 'none';
	
	// Проверка, что пароль содержит цифры
	if(pass.search(/[0123456789]/) === -1) { 
		errNeeNum.style.display = 'block';
    } else {
		errNeeNum.style.display = 'none';
	}
	
	// Проверка наличия спецсимволов
	if(pass.search(/[!@#$%^&*()\-=_+~[\]{}'"\\|,./<>?]/) === -1)  { 
		errNeeSpec.style.display = 'block';
    } else {
		errNeeSpec.style.display = 'none';
	}
	
	// Проверка наличия заглавных и строчных букв
	if (pass.length <= 1) errDifCase.style.display = 'none';
	
	if ((pass.search(/[a-z]/) === -1) || (pass.search(/[A-Z]/) === -1)) {
        errDifCase.style.display = 'block';
    } else {
		errDifCase.style.display = 'none';
	}	
});