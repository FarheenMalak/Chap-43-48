// Question 1: Alert on Link Click
function showAlert() {
    alert('Link clicked!');
}

// Question 2: Image alert 
function showMessage(mobileName) {
    alert('You clicked on ' + mobileName);
}

// Question 3: Delete Row in Student Table
function deleteRow(button) {
    var row = button.parentElement.parentElement;
    row.parentElement.removeChild(row);
}

// Question 4: Counter Increase and Decrease
let counter = 0;

function increaseCounter() {
    counter++;
    document.getElementById('counterValue').innerText = counter;
}

function decreaseCounter() {
    counter--;
    document.getElementById('counterValue').innerText = counter;
}
