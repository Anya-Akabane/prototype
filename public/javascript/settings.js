
// // Path: public/javascript/settings.js

document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var nickName = document.getElementById('nickName').value;
  var bio = document.getElementById('bio').value;
  var gender = document.getElementById('genders').value;
  var birthdate = document.getElementById('birthdate').value;

  var errorMessage = "";

  if (!name) {
    errorMessage += "Name field must be filled out!\n";
  }

  if (!nickName) {
    errorMessage += "Nickname field must be filled out!\n";
  }

  if (!bio) {
    errorMessage += "Bio field must be filled out!\n";
  }

  if (!gender) {
    errorMessage += "Gender field must be filled out!\n";
  }

  if (!birthdate) {
    errorMessage += "Birthdate field must be filled out!\n";
  }

  if (errorMessage) {
    swal("Oops!", errorMessage, "error");
  } else {
    swal("Good job!", "Form submitted successfully!", "success");
  }
});