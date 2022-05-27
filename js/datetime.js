	// Скрипт вывода даты, времени и дня недели
	var day = new Date();
	
	var weekday=new Array(7);
	weekday[0]="Воскресенье";
	weekday[1]="Понедельник";
	weekday[2]="Вторник";
	weekday[3]="Среда";
	weekday[4]="Четверг";
	weekday[5]="Пятница";
	weekday[6]="Суббота";
	
	var month=new Array(12);
	month[0]="Январь";
	month[1]="Февраль";
	month[2]="Март";
	month[3]="Апрель";
	month[4]="Май";
	month[5]="Июнь";
	month[6]="Июль";
	month[7]="Август";
	month[8]="Сентябрь";
	month[9]="Октябрь";
	month[10]="Ноябрь";
	month[11]="Декабрь";
	
	// вывод дня недели
	document.getElementById("day").innerHTML = (weekday[day.getDay()]+ " ");
	
	//вывод даты
	document.getElementById("date").innerHTML = (day.getDate() + " " + month[day.getMonth()] + " " + day.getFullYear() + " ");
	
	//Вывод времени
	var timer = setInterval(function() {
		myTimer();
	}, 1000);
	
	function myTimer() {
		var hour = new Date();
		document.getElementById("clock").innerHTML = hour.toLocaleTimeString();
	} 
	