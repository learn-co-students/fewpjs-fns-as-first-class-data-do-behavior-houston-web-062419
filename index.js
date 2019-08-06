/* Given Code, don't edit */

function handleClick() {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* Write your implementation of greet() */
function greet(time){
	// hour = 0;
	const hour = parseInt(time.split(":")[0]);
	// debugger;
	if (hour < 12)
		return "Good Morning";
	if (hour >= 17)
		return "Good Evening";
	if (hour >= 12)
		return "Good Afternoon";
	// return "Good Morning";
}
/* Write your implementation of displayMessage() */
function displayMessage( str) {
	let gr = document.getElementById("greeting");
	gr.innerText = str;
}