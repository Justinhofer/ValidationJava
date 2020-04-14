function app(){
  login();
  addNote();
  
}
function login(){
  var inputName = document.body.querySelector(".nameInput");
  var inputPass = document.body.querySelector(".passwordInput");
  var buttonEle = document.body.querySelector(".submit");
  var errorDiv = document.body.querySelector(".error");

  var list = [];

  buttonEle.addEventListener("click", function () {
  if (validation(inputName) && inputPass.value === "Password") {
    list.push({
      name: inputName.value
    });

    errorDiv.innerHTML = "Success";
  } else {
    if (!validation(inputName) && inputPass.value === "Password") {
      errorDiv.innerHTML = "Name has no text";
    } else if (validation(inputName) && inputPass.value !== "Password") {
      errorDiv.innerHTML = "Password is wrong";
    } else {
      errorDiv.innerHTML = "You suck";
    }
  }

  console.log(list);
});

function validation(ele) {
  if (ele.value !== "") {
    return true;
  } else {
    return false;
  }
}
}

