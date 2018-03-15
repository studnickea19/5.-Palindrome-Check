"use:strict"
//5. checkPalindrome							
function checkPalindrome(input){
	input = input.toString();
	input2 = input.split('').reverse().join('')
	if(input === input2){
		console.log("Is Palindrome")
	}

	else{
		console.log("Is Not Palindrome")
	}
return;

}

checkPalindrome(12321);

// function checkPalindrome(input){
// 	let reversedInput = "";
// 	for(let i = input.length -1; i > i--){
//		reversedInput += input[i];	
// 	}
// 	if(input.toLowerCase() ===reverseInput.toLowerCase()){
// 		return true;
// 	}
// 	return false;
// }
// 

//Don't log results to the console, limits the uses of the function because
//it can't be called by something else. Keeps code flexible, reusable, maintainable.

//In JS  don't want to modify original data