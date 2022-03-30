//Set current date and time in Time field
var today = new Date();
const daysName=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] //use this array against day numbers to get day name
var date =  today.getDate()+'/'+ (today.getMonth()+1)+ '/' +today.getFullYear();
var day = today.getDay(); //returns 0 for monday and so on.. 
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + '  '+ daysName[day] + ' ' + time;
document.getElementById('time').setAttribute("value", dateTime);



let expensesList=[];
let addExpense = document.getElementById("addExp");
addExpense.addEventListener("click", function() 
{

    let exp=localStorage.getItem('expenses');
    if(exp==null)
    {
        expensesList=[];
    }
    else{
        expensesList=JSON.parse(exp);
    }

    let expenses={
        Summary: document.getElementById('summary').value,
        Description: document.getElementById('description').value,
        Amount: document.getElementById('amount').value,
        Type: document.getElementById('type').value,
        Time: document.getElementById('time').value
    } 
    expensesList.push(expenses);
    localStorage.setItem('expenses',JSON.stringify(expensesList));
    document.getElementById('summary').value="";
    document.getElementById('description').value="";
    document.getElementById('amount').value="";
    document.getElementById('type').value="";
});