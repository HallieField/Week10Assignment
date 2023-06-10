function addTableRow() {
    let table = document.getElementById("myTable");
    let row = table.insertRow(-1);
    
    //Assigns input value to the variable
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let input3 = document.getElementById("input3").value;

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    //Calls value to the screen
    cell1.innerHTML = input1;
    cell2.innerHTML = input2;
    cell3.innerHTML = input3;

    // Clear the input fields
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
}

// Event listener for form submission
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    addTableRow(); // Call the function to add a new row
});