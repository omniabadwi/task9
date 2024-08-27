function validateInput() {
    var input = document.getElementById('myInput').value;
    var errorMessage = document.getElementById('error-message');

    if (input.length < 6) {
        errorMessage.style.display = 'inline';
    } else {
        errorMessage.style.display = 'none';
    }
}