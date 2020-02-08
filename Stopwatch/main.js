

var timer = document.getElementById("timer");
var toggleBtn = document.getElementById("toggle");
var resetBtn = document.getElementById("reset");
var logs = document.getElementById("logs");
var logss = document.getElementById("logss");

var watch = new Stopwatch(timer);

var dog = document.getElementById("bark");




toggleBtn.addEventListener("click", function(){
	if(watch.isOn){
		toggleBtn.textContent = "Stop";
		
		watch.stop();
		console.log(timer.innerText.toString());
		createParagraph(timer.innerText.toString())
		var logss = createLogs(timer.innerText.toString());
		logs.append(logss);
		dog.play();
	}else{
		dog.pause();
		toggleBtn.textContent = "Start";
		watch.start();
	}
});


resetBtn.addEventListener("click", function(){
	watch.reset();
})



function createParagraph(text,className){
	var p = createElement("p",className);
	p.innerText = text;
	return p;
}

function createUl(className){
	var ul = createElement("ul");
	return ul;
} 

function createElement(type,className){
	var element = document.createElement(type);
	if(className){
		element.classList.add(className);
	}
	return element
}
function createLogs(log){
	var li = createElement("li","logs");
	var p = createParagraph(log);
	
	li.append(p);
	return li;
}

