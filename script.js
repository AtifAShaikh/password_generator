// Assignment Code
var generateBtn = document.querySelector("#generate");
var password_len = 0;
var use_lowers = false;
var use_uppers = false;
var use_nums = false;
var use_specials = false;

var lowerCaseChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numChars = ['0','1','2','3','4','5','6','7','8','9'];
var specialChars = ['`','~','!','@',"#","$","%","^","&","*","(",")","-","_","+","=","?",">","<",",","."];
var master = [];
var password_array = [];
var password_string = "";

function returnRandomIndex(arrayToReturn){
  return arrayToReturn[Math.floor(Math.random()*arrayToReturn.length)];
}

function generatePassword(){
  var lenghtValidated = false;
  master = [];
  password_array = [];

  while(!lenghtValidated){
    password_len = Number(prompt("Enter a password length"));
    if(password_len > 8 && password_len < 125){
      lenghtValidated = true;
    }
    if(lenghtValidated === false){
      alert("Invalid length, select between 8 and 125");
    }
  }

  var charsValidated = false;

  while(!charsValidated){
    use_lowers = confirm("Use lower case characters?");
    use_uppers = confirm("User upper case characters?");
    use_nums = confirm("Use numbers?");
    use_specials = confirm("Use special characters");

    if(!use_lowers && !use_uppers && !use_nums && !use_specials){
      alert("invalid, pick at least 1");
    } else {
      charsValidated = true;
    }
  }

  for (var i=0; i < password_len; i++){
    password_array.push('');
  }

  var emptyFound = false;
  var currentIndex;

  if(use_lowers){
    while(!emptyFound){
      currentIndex = Math.floor(Math.random()*password_array.length);
      console.log(currentIndex);
      if(password_array[currentIndex] === ''){
        emptyFound = true;
      }
    }
    password_array[currentIndex] = returnRandomIndex(lowerCaseChars);
    master = master.concat(lowerCaseChars);
  }

  emptyFound = false;
  if(use_uppers){
    while(!emptyFound){
      currentIndex = Math.floor(Math.random()*password_array.length);
      console.log(currentIndex);
      if(password_array[currentIndex] === ''){
        emptyFound = true;
      }
    }
    password_array[currentIndex] = returnRandomIndex(upperCaseChars)
    master = master.concat(upperCaseChars);
  }

  emptyFound = false;
  if(use_nums){
    while(!emptyFound){
      currentIndex = Math.floor(Math.random()*password_array.length);
      console.log(currentIndex);
      if(password_array[currentIndex] === ''){
        emptyFound = true;
      }
    }
    password_array[currentIndex] = returnRandomIndex(numChars);
    master = master.concat(numChars);
  }

  emptyFound = false;
  if(use_specials){
    while(!emptyFound){
      currentIndex = Math.floor(Math.random()*password_array.length);
      console.log(currentIndex);
      if(password_array[currentIndex] === ''){
        emptyFound = true;
      }
    }
    password_array[currentIndex] = returnRandomIndex(specialChars);
    master = master.concat(specialChars);
  }

  for(var i = 0; i < password_array.length; i++){
    if(password_array[i] === ''){
      password_array[i] = returnRandomIndex(master);
    }
    password_string += password_array[i];
  }

  return password_string;


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
