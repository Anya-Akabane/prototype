function previewImages() {
  var preview = document.getElementById('imagePreview');
  var files = document.getElementById('photos').files;
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    var img = document.createElement('img');
    img.style.maxWidth = '300px'; // set max width to limit the size of the preview images

    var container = document.createElement('div');
    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = "<i class='bx bx-trash'></i>";
    deleteButton.className = 'deleteBtn';
    
    container.appendChild(img);
    container.appendChild(deleteButton);
    preview.appendChild(container);

    var reader = new FileReader();
    reader.onload = (function(aImg) { 
      return function(e) { 
        aImg.src = e.target.result; 
      }; 
    })
    (img);
    reader.readAsDataURL(file);
  }
  document.getElementById('photos').value = ''; // clear the file input for additional uploads
}

document.addEventListener('click', function(e) {
  // Check if the clicked element is a delete button
  if (e.target.classList.contains('deleteBtn') || e.target.parentNode.classList.contains('deleteBtn')) {
    e.target.closest('.deleteBtn').parentNode.remove();
  }
});