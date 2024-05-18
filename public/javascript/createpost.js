

const quill = new Quill('#editor', {
    modules: 
    {
    toolbar: '#toolbar-container'
    },
    placeholder: 'Compose an epic...',
    theme: 'snow'
});


var text = quill.getText();


document.querySelector('form').addEventListener('submit', function(e) {
    var hiddenInput = document.createElement('input');
    hiddenInput.setAttribute('type', 'hidden');
    hiddenInput.setAttribute('name', 'editorContent');
    hiddenInput.setAttribute('value', text);
    this.appendChild(hiddenInput);
});