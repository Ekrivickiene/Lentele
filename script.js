"use strict"


function myFunctionLast (){
 var table = document.getElementById("myTable").deleteRow(1);

};
function myFunctionFirst(){
  var table = document.getElementById("myTable").deleteRow(1);
};



function fillTable(){
  var table = document.getElementById("myTable");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = document.getElementById("fname").value;
  cell2.innerHTML = document.getElementById("lname").value;
  cell3.innerHTML = document.getElementById("age").value;
  return false;
}
