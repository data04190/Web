var gameon = true;
var gameArray = [0,0,0];

function gen(e){
	if(gameon == false)
		return;
	var n = Math.floor(Math.random()*3);
	var obj = e.target;

	obj.innerHTML = n;
	if(obj.id == "first")
		gameArray[0] = n;
		
	else if (obj.id == "second")
		gameArray[1] = n;
		
	else {
		gameArray[2] = n;

		var final_num = gameArray[0];
		var count = 0;

		for(i = 0; i<gameArray.length;i++){
			if(gameArray[i]== final_num)
				count++;
		}
		if (count == gameArray.length)
			document.getElementById("msg").innerHTML = "Success(click here to do again)"
		else
			document.getElementById("msg").innerHTML = "fail(click here to do again)"
		gameon = false;

	}
		
}
function reset(){
	document.getElementById("first").innerHTML = 0;
	document.getElementById("second").innerHTML = 0;
	document.getElementById("third").innerHTML = 0;
	document.getElementById("msg").innerHTML = "";
	gameon = true;
	

}