var selectedRow = null;

function onFormSubmit(e) {
  event.preventDefault();
  var formData = readFormData();
  if (selectedRow === null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}

function readFormData() {
  var formData = {};
  formData["productCode"] = document.getElementById("productCode").value;
  formData["productName"] = document.getElementById("productName").value;
  formData["quantity"] = document.getElementById("quantity").value;
  formData["perPrice"] = document.getElementById("perPrice").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  var cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.productCode;
  var cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.productName;
  var cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.quantity;
  var cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.perPrice;
  var cell5 = newRow.insertCell(4);
  cell5.innerHTML =
    "<button onclick='onEdit(this)'>Edit</button> <button onclick='onDelete(this)'>Delete</button>";
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("productCode").value = selectedRow.cells[0].innerHTML;
  document.getElementById("productName").value = selectedRow.cells[1].innerHTML;
  document.getElementById("quantity").value = selectedRow.cells[2].innerHTML;
  document.getElementById("perPrice").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.productCode;
  selectedRow.cells[1].innerHTML = formData.productName;
  selectedRow.cells[2].innerHTML = formData.quantity;
  selectedRow.cells[3].innerHTML = formData.perPrice;
  selectedRow = null;
}

function onDelete(td) {
  if (confirm("do you want to delete this record")) {
    row = td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
  }
  resetForm();
}

function resetForm() {
  document.getElementById("productCode").value = "";
  document.getElementById("productName").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("perPrice").value = "";
}
