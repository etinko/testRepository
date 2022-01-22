let id = 0;
document.getElementById('add').addEventListener('click',() =>{
    let table = document.getElementById('members');
    let row =table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('MemberID').value;
    row.insertCell(1).innerHTML = document.getElementById('LastName').value;
    row.insertCell(2).innerHTML = document.getElementById('FirstName').value;
    row.insertCell(3).innerHTML = document.getElementById('DOB').value;
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('members').value = '';
});
function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-danger';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () =>{
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete)
    };
    return btn;


}
