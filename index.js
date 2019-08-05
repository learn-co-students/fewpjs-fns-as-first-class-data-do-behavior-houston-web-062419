/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */




function greet(string) {
  let time = parseInt(string);
  if (time < 1200) return "Good Morning";
  if (time < 1700) return "Good Afternoon";
  if (time > 1700) return "Good Evening";
}

function displayMessage(string) {
  document.getElementById('greeting').innerText = string;
}