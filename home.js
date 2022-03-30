let isShow=false;
window.onload = () => {
isShow=true;
show();
}

function show(){
  if(isShow===true) //only execute the function when window loads or when a record is deleted from local storage
  {
let expenseList = localStorage.getItem('expenses');
let expensesArray=JSON.parse(expenseList);

for (let index = 0; index < expensesArray.length; index++) 
{
let html=" ";
let newExpense=document.createElement('tr');
// a record has given the serial number and buttons id=1 if it has index 0 in local storage and so on..
// add a row in home page, corresponding to each record in local storage
html=`
          <td>${index + 1}</td>
          <td> ${expensesArray[index].Summary} </td>
          <td> ${expensesArray[index].Description} </td>
          <td> Rs. ${expensesArray[index].Amount} </td>
          <td> ${expensesArray[index].Type} </td>
          <td> ${expensesArray[index].Time} </td>
          <td>
            <button type="button" name="update" class="update" id="u${index+1}" onclick="update(this.id)">Update</button>
            <button type="button" name="delete" class="delete" id="d${index+1}" onclick="del(this.id)" >Delete</button>
          </td>
`;

newExpense.innerHTML=  html;
document.getElementById('expTable').appendChild(newExpense); //append new row to the table containing expense details
}
}
isShow=false;
}

function del(btnId){
  let recordNo = btnId[1] - 1; //extract indexNo from id, compute it to corresponding index no in local storage array
  let expenseList = localStorage.getItem("expenses");
  let expensesArray=JSON.parse(expenseList);
  expensesArray = Array.from(expensesArray);
  expensesArray.splice(recordNo, 1); //delete one record at index 'btnId' of array
  localStorage.setItem("expenses", JSON.stringify( expensesArray) ); //update local Storage
  console.log( recordNo + "  " + expensesArray);
  isShow=true; //to allow execution of show function
  location.reload(); //reload current page to update expenses table
}

function update()
{
  

}