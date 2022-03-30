

let filter = document.getElementById('result');
filter.addEventListener("click", function () 
{
    document.getElementById('details').style.display="block"; //since table header display was none initially..
    let expenseList = localStorage.getItem('expenses');
    let expensesArray = JSON.parse(expenseList);

    let expenseType = document.getElementById('type').value;
    expenseType=expenseType.toLowerCase();
    const Min = document.getElementById('rangeMin').value;
    const Max = document.getElementById('rangeMax').value;
let serialNo=0;
    for (let index = 0; index < expensesArray.length; index++) {
        if ((expensesArray[index].Type).toLowerCase() === expenseType) {
            if ((expensesArray[index].Amount >= Min) && (expensesArray[index].Amount <= Max)) {
                let html="";
                let expense = document.createElement('tr');
                ++serialNo;
                html = `
          <td>${serialNo}</td>
          <td> ${expensesArray[index].Summary} </td>
          <td> ${expensesArray[index].Description} </td>
          <td> Rs. ${expensesArray[index].Amount} </td>
          <td> ${expensesArray[index].Type} </td>
          <td> ${expensesArray[index].Time} </td> `;

               expense.innerHTML = html;
                document.getElementById('details').appendChild(expense);
            }
        }
    }
}
);