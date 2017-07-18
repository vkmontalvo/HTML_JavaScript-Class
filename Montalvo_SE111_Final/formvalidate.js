
var submit= document.getElementById("submit");
	
submit.onclick = validate;

function validate() {
    
    var firstName = document.getElementById("firstname");
    var lastName = document.getElementById("lastname");
    var emailAddress = document.getElementById("email");
    var phoneNumber = document.getElementById("phone");
	
	// errors spans
	
	var firstNameError = document.getElementById("first-name-error");
	var lastNameError = document.getElementById("last-name-error");
	var emailAddressError = document.getElementById("email-error");
	var phoneNumberError = document.getElementById("phone-error");
	
	
	if(firstName.value==="") {
		
		firstNameError.innerHTML ="* first name is required";
	} 
	
	else {
		
		firstNameError.innerHTML="";
	}
	
	if(lastName.value==="") {
		
		lastNameError.innerHTML ="* last name is required";
	} 
	
	else {
		
		lastNameError.innerHTML="";
	}
	
	// email-address
	if(emailAddress.value==="") {
		
		emailAddressError.innerHTML ="* email address is required";
	} 
	
	else {
		
		emailAddressError.innerHTML="";
	}
	
	
	if(phoneNumber.value==="") {
		
		phoneNumberError.innerHTML ="* phone number is required";
	} 
	
	else {
		
		phoneNumberError.innerHTML="";
	}
	
	var message ="Please press OK to confirm your submission.";
	
	if(firstName.value != "" &&  
       lastName.value != "" && 
       emailAddress.value != "" && 
       phoneNumber.value != "")
    
	{
        alert(message + "\n" + firstName.value + "\n" + lastName.value + "\n" + emailAddress.value + "\n" + phoneNumber.value);
        window.location.assign("thankyou.html");
    }
}