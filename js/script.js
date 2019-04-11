menu.onclick = function myFunction() {
	var x = document.getElementById('myTopNav');

	if (x.className === "header-conatiner")
	{
		x.className += " responsive";
	}else{
		x.className = "header-conatiner";
	}
}