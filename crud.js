var selectedRow = null;
function createMember(e){
    event.preventDefault();
    var formData = readData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

//Retrieve the data
function readData(){
    var formData = [];
    formData["memberId"] = document.getElementById("memberId").value;
    formData["lastName"] = document.getElementById("lastName").value;
    formData["firstName"] = document.getElementById("firstName").value;
    formData["dob"] = document.getElementById("dob").value;
    return formData;
}

//Insert the data
function insertNewRecord(data){
    var table = document.getElementById("membersList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.memberId;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.lastName;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.firstName;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.dob;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button class = 'btn btn-success' onClick='onEdit(this)'>Edit</button> <button class = 'btn btn-danger' onClick='onDelete(this)'>Delete</button>`
}

//Edit the data
function onEdit(id){
    selectedRow = id.parentElement.parentElement;
    document.getElementById('memberId').value = selectedRow.cells[0].innerHTML;
    document.getElementById('lastName').value = selectedRow.cells[1].innerHTML;
    document.getElementById('firstName').value = selectedRow.cells[2].innerHTML;
    document.getElementById('dob').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.memberId;
    selectedRow.cells[1].innerHTML = formData.lastName;
    selectedRow.cells[2].innerHTML = formData.firstName;
    selectedRow.cells[3].innerHTML = formData.dob;
}

//Delete the data
function onDelete(id){
    if(confirm('Do you want to delete this record?')){
        row = id.parentElement.parentElement;
        document.getElementById('membersList').deleteRow(row.rowIndex);
    }
    resetForm();
}

//Reset the data
function resetForm(){
    document.getElementById('memberId').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('firstName').value = '';
    document.getElementById('dob').value = '';
    selectedRow = null;
}