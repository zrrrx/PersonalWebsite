/******************
    
    Project 3
    Name: Zackary Ward
    Date: December 8, 2021
    Description: JavaScript for Project 3

*******************/

document.addEventListener("DOMContentLoaded", load);

function validate(e) {
  hideErrors();

  if(formHasErrors()){
    e.preventDefault();

    return false;
  }

  return true;
}

function formHasErrors() {

  let errorFlag = false;

  let input = ["name", "email", "phone"];

	for(let i = 0; i < input.length; i++){

		let inputField = document.getElementById(input[i]);

		if(inputField.value == null || inputField.value == ""){

			document.getElementById(input[i] + "_error").style.display = "block";

			if(!errorFlag){
				inputField.focus();
			}

			errorFlag = true;
		}
	}

  return errorFlag;
}

function hideErrors(){
	// Get an array of error elements
	let error = document.getElementsByClassName("error");

	// Loop through each element in the error array
	for ( let i = 0; i < error.length; i++ ){
		// Hide the error element by setting it's display style to "none"
		error[i].style.display = "none";
	}
}

function load() {
  document.getElementById("orderform").addEventListener("submit", validate);
}