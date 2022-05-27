// Проверка, что userAgent не соответствует IE, иначе ошибка
var errUserAgent = document.getElementById('errorUserAgent');
errUserAgent.style.display = 'none';

var usrAg = navigator.userAgent;
if (usrAg == "Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv 11.0) like Gecko") {
	errUserAgent.style.display = 'block';
	window.stop();
}