console.log("hii");
var button = document.getElementsByClassName("button");
var display=document.getElementById("display");

var value1=0;
var value2=null;
var operator=null;

function checkOperator(val) {
	return val=="+" || val=="-" || val=="*" || val=="/";
}

for(var i=0;i<button.length;i++){
	button[i].addEventListener('click', function(){
		var val= this.getAttribute('data-value');
		var text = display.textContent.trim();

		if (val == "ac") {
            display.textContent = "";
        } else if (val == "sign") {
            value1 = parseFloat(text);
            value1 = -1 * value1;
            display.textContent = value1;
        }else if (val == "%") {
            value1 = parseFloat(text);
            value1 = value1 / 100;
            display.textContent = value1
        }else if (val == ".") {
            if (text.length && !text.includes('.')) {
                display.textContent = text + '.';
            }
        } else if (val == "=") {
            value2 = parseFloat(text);
            var result = eval(value1 + ' ' + operator + ' ' + value2);
            if (result) {
                display.textContent = result;
                value1 = result;
                value2 = null; 
                operator = null;
            }
        }else if (checkOperator(val)) {
            operator = val;
            value1 = parseFloat(text);
            display.textContent = "";
        }  
        else {
            display.textContent += val;
        }
	});
}

