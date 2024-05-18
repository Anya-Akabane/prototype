document
  .getElementById("profileForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Fetch form data
    const formData = new FormData(this);

    // You can do further validation here

    // Show alert
    showAlert("Changes saved successfully!", "success");
  });

function showAlert(message, type) {
  const alertDiv = document.createElement("div");
  alertDiv.className = `alert alert-${type}`;
  alertDiv.appendChild(document.createTextNode(message));

  const container = document.querySelector(".container");
  const form = document.getElementById("profileForm");
  container.insertBefore(alertDiv, form);

  // Remove alert after 3 seconds
  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
}

// Path: public/javascript/settings.js
document
  .getElementById("profileForm")
  .addEventListener("submit", function (event) {
    // Get form fields
    const name = document.getElementById("name").value;
    const nickName = document.getElementById("nickName").value;
    const bio = document.getElementById("bio").value;
    const gender = document.getElementById("genders").value;
    const birthdate = document.getElementById("birthdate").value;

    // Validate fields
    if (!name) {
      alert("Name is required.");
      event.preventDefault();
    } else if (!nickName) {
      alert("Nickname is required.");
      event.preventDefault();
    } else if (!bio) {
      alert("Bio is required.");
      event.preventDefault();
    } else if (!gender) {
      alert("Gender is required.");
      event.preventDefault();
    } else if (!birthdate) {
      alert("Birthdate is required.");
      event.preventDefault();
    } else {
      // All fields are valid
      alert("Profile updated successfully.");
    }
  });
