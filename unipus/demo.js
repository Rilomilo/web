var createCode=function(){
	let char=['1','2','3','4','5','6','7','8','9','0'];
	var result="";
	var sub;
	for(var i=1;i<=4;i++){
		sub=Math.floor(Math.random()*10);
		result+=char[sub];
	}
	document.getElementById("codeNumber").innerHTML=result;
	// changeTitle();
}

function changeTitle(){
	var title=document.createElement("h2");
	title.innerHTML="go to mooc";
	title.style.cssText = "font-size:20px";
	console.log(title);
	document.getElementById("header").appendChild(title);
}
