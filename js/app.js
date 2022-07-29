// Calculator

function insert (num){

	 var numero = document.getElementById('result').innerHTML;
	document.getElementById('result').innerHTML = numero + num;
}

function clean () {

	document.getElementById('result').innerHTML = " ";
}

function back() {

	var result = document.getElementById('result').innerHTML;
	document.getElementById('result').innerHTML = result.substring(0, result.length -1);
}

function calc() {

	var result = document.getElementById('result').innerHTML;

	if(result) {

	document.getElementById('result').innerHTML = eval(result);

	}

	else{

		document.getElementById('result').innerHTML = "Sem cálculo, sem resultado!";
	}
}

//Switch

let swtich = document.querySelector(".switch");
let body = document.querySelector("body");
let output = document.getElementById("result");
let header = document.querySelector("header");
let contBtns = document.querySelector(".calculator");
let btnDel = document.querySelector(".calculator_button_del");
let input = document.querySelectorAll("input");
let btnReset = document.querySelector(".calculator_button_reset");
let btnIgual = document.querySelector(".calculator_button_equal");
let btns = document.querySelectorAll(".bt-s");


[...input].forEach((e,i) => {
    e.addEventListener("click", () => {
        if (i === 0) {
            e.classList.add("selected");

            input[1].classList.remove("selected");
            input[2].classList.remove("selected");

            body.style.backgroundColor = "hsl(222, 26%, 31%)";
            output.style.backgroundColor = "hsl(222, 36%, 20%)";
            output.style.color = "white";
            header.style.color = "white";
            swtich.style.backgroundColor = "hsl(223, 31%, 20%)";
            contBtns.style.backgroundColor = "hsl(223, 31%, 20%)";
            btnDel.style.backgroundColor = "#637097";
            btnDel.style.color = "white";
            btnDel.style.boxShadow = "rgb(64, 78, 114) 0px 5px 0px 0px";
            btnReset.style.backgroundColor = "#637097";
            btnReset.style.boxShadow = "rgb(64, 78, 114) 0px 5px 0px 0px";
            btnReset.style.color = "white";
            btnIgual.style.backgroundColor = "#d03f2f";
            btnIgual.style.color = "white";
            btnIgual.style.boxShadow = "rgb(147, 38, 26) 0px 5px 0px 0px";
           

            [...btns].forEach((e) => {
                e.style.color = "#444b5a";
                e.style.backgroundColor = "#eae3dc";
                e.style.boxShadow = "rgb(180, 165, 151) 0px 5px 0px 0px";
            });
        } else if ( i === 1) {
            e.classList.add("selected");
            input[0].classList.remove("selected");
            input[2].classList.remove("selected");

            body.style.backgroundColor = "#e6e6e6";
            header.style.color = "black";
            output.style.backgroundColor = "#ededed";
            output.style.color = "black";
            swtich.style.backgroundColor = "#d1cccc";
            contBtns.style.backgroundColor = "#d1cccc";
            btnDel.style.backgroundColor = "#377f86";
            btnDel.style.boxShadow = "rgb(27, 95, 101) 0px 5px 0px 0px";
            btnDel.style.color = "#35352c";
            btnReset.style.backgroundColor = "#377f86";
            btnReset.style.boxShadow = "rgb(27, 95, 101) 0px 5px 0px 0px";
            btnReset.style.color = "#35352c";
            btnIgual.style.backgroundColor = "#ca5502";
            btnIgual.style.boxShadow = "rgb(137, 57, 1) 0px 5px 0px 0px";
            
            [...btns].forEach((e) => {
                e.style.color = "#444b5a";
                e.style.backgroundColor = "#eae3dc";
                e.style.boxShadow = "rgb(180, 165, 151) 0px 5px 0px 0px";
            });
        } else {
            e.classList.add("selected");
            input[1].classList.remove("selected");
            input[0].classList.remove("selected");

            body.style.backgroundColor = "#160628";
            header.style.color = "#ffe53d";
            output.style.backgroundColor = "#1d0934";
            output.style.color = "#ffe53d";

            swtich.style.backgroundColor = "#1d0934";
            contBtns.style.backgroundColor = "#1d0934";

            [...btns].forEach((e) => {
                e.style.color = "#ffe53d";
                e.style.backgroundColor = "#341c4f";
                e.style.boxShadow = "rgb(135, 28, 156) 0px 5px 0px 0px";
            });

            btnDel.style.backgroundColor = "#58077d";
            btnDel.style.boxShadow = "rgb(188, 21, 244) 0px 5px 0px 0px";
            btnDel.style.color = "#ffe53d";
            btnReset.style.backgroundColor = "#58077d";
            btnReset.style.boxShadow = "rgb(188, 21, 244) 0px 5px 0px 0px";
            btnReset.style.color = "#ffe53d";
            btnIgual.style.backgroundColor = "#00e0d1";
            btnIgual.style.boxShadow = "rgb(108, 249, 242) 0px 5px 0px 0px";
            btnIgual.style.color = "#1b2428";
            
        }
    });
});
