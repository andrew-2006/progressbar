/* Мои функции */
let myProgress = 0;
let myProgressSym = "";

$("#btn1").click(function() {
	myProgress += 1;
    if (myProgress > 100) { 
		myProgress = 100; 
	}
	myProgressSym = String(myProgress) + "%";
    $("#my-progress-bar").width(myProgressSym);
    $("#my-progress-bar").text(myProgressSym);
});

$("#btn2").click(function() {
	myProgress += 3;
    if (myProgress > 100) { 
		myProgress = 100; 
	}
	myProgressSym = String(myProgress) + "%";
    $("#my-progress-bar").width(myProgressSym);
    $("#my-progress-bar").text(myProgressSym);
    
});

$("#btn3").click(function() {
	myProgress += 7;
	if (myProgress > 100) { 
		myProgress = 100; 
	}
	myProgressSym = String(myProgress) + "%";
    $("#my-progress-bar").width(myProgressSym);
    $("#my-progress-bar").text(myProgressSym);
    
});

/* Обычный JavaScript 
btn3.onclick = function() {
      myProgress += 7;
      $("#my-progress-bar").width(myProgress);
      alert (myProgress);
    } 
*/  