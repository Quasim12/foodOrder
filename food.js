// function incrementQuantity() {
//     var quantityField = document.getElementById("quantity");
//     var currentQuantity = parseInt(quantityField.value);
//     quantityField.value = currentQuantity + 1;
//   }
function addFoodItem() {
  const foodItemsContainer = document.getElementById('foodItems');
  const foodItemIndex = foodItemsContainer.children.length + 1;

  const div = document.createElement('div');
  div.innerHTML = `
    <label for="food${foodItemIndex}">Food Item ${foodItemIndex}:</label>
    <input type="text" id="food${foodItemIndex}" name="foodItem[]">
    <input type="number" id="quantity${foodItemIndex}" name="quantity[]" min="0">
    <button type="button" onclick="removeFoodItem(this)">Remove</button>`
  
  foodItemsContainer.appendChild(div);
}

function removeFoodItem(button) {
  button.parentNode.remove();
}




  function cap() {
    var value = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',1,2,3,4,5,6,7,8,9,0,'!','@','#','$','%','^','&','*','(',')','+','-'];
    var final ="";
    for(var i = 0; i < 8; i++){
      var a = value [Math.floor(Math.random()*value.length)];
      final = final+ a;
    }
    document.getElementById("Captcha").value = final;
    }
    function validCap() {
      var str1 = document.getElementById("Captcha").value;
      var str2 = document.getElementById("Captchainput").value;
      if(str1 != ""){
        if(str1 === str2){
        return true;
      }
      else{
        alert("Please Enter a Valid Captcha");
        return false;
      }
      }
      else{
        return false;
      }
      
    }

    function formSubmittedSuccessfully() {
      if(validCap()) {
        // var errorMessage = document.getElementById("success");
        // if(errorMessage){
        //   errorMessage.remove();
        // }
        window.open("thanks.html", "_blank"); // Open thanks.html in a new tab
      }
}

// let timer;

// function name_validation() {
//   clearTimeout(timer);
//   timer = setTimeout(myFunction, 5000);
// }

// function myFunction() {
//   let text = document.getElementById("name").value;
  
//    if (!isNaN(text)) {
//     alert("plz enter name instead of number.");
//   } 
// }
// function name_validation() {
//   var nameInput = document.getElementById('name').value;
  
//   if (nameInput.trim() == "") {
//     alert("Name must be filled out");
//     return false; // Prevent form submission
//   }
  
//   // You can add more validation checks here
  
//   return true; // Allow form submission
// }
function NameValidate(){
  var firstName=document.getElementById("name").value;
  var check=/^[a-zA-Z]{3,15}$/;
  if(check.test(firstName)){

      document.getElementById("message").innerHTML='';
  }else{
      document.getElementById("message").innerHTML='Enter your valid name';
      document.getElementById("message").style.color='red';
  }
}
function addressValidate(){
  addressName=document.getElementById("address").value;
  var check=/^[a-z 0-9 A-Z]{5,25}$/;
  if(check.test(addressName)){

      document.getElementById("add").innerHTML='';
  }else{
      document.getElementById("add").innerHTML='Enter your valid address';
      document.getElementById("add").style.color='red';
  }
}
function mobileValidate(){
  var mobileName=document.getElementById("Mobile").value;
  var check=/^[6-9][0-9]{9}$/;
  if(check.test(mobileName)){

      document.getElementById("mess").innerHTML='';
  }else{
      document.getElementById("mess").innerHTML='Enter your valid number';
      document.getElementById("mess").style.color='red';
  }
}
function emailvalidate(){
  var emailName=document.getElementById("email").value;
  var check=(/^[A-Za-z]*[\._\-0-9]*[@][A-Za-z]*[\.][a-z]{3}$/)
  if(check.test(emailName)){

      document.getElementById("mail").innerHTML='';
  }else{
      document.getElementById("mail").innerHTML='Enter your valid  email number';
      document.getElementById("mail").style.color='red';
  }
}
// var emailField = document.getElementById("email");
// var emailLevel = document.getElementById("emailLevel");
// var emailError = document.getElementById("emailError");

// function emailvalidate(){

// if(!emailField.value.match(/^[A-Z a-z \._\-0-9]*[@][A-Z a-z]*[\.][a-z]{2,4}$/)){
//   emailError.innerHTML="please enter a valid email";
// return false
// }

// emailError.innerHTML="";
// return true;
// }