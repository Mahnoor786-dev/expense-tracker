//add years values in year drop down menu till current year
window.onload = () => 
{
let yearList = document.getElementById('year');
let year = new Date().getFullYear(); //get year of current date
let startingYear = 1990;
for (let i = startingYear; i <= year; i++) {
    let yearOptn=document.createElement('option');
    yearOptn.innerText = i;
    yearOptn.value=i;
    yearList.appendChild(yearOptn);
}
};

let btn=document.getElementById('selectM-Y');

btn.addEventListener("click", () =>{
let month;
let year;
let selectedYear=document.getElementById('year').value;
let selectedMonth=document.getElementById('month').value;
//get type and price values in an array for expenses of selected year, month
let expenseList = localStorage.getItem('expenses');
let expensesArray = JSON.parse(expenseList);
//each of below variable store the total expenses on their corresponding type
let Education = 0;
let Food = 0;
let Grocery = 0;
let Entertainment = 0;
let Grooming = 0;
let Other = 0;
//type, price of a current expense:
let thisType;
let thisPrice;

for (let i = 0; i < expensesArray.length; i++)
{
let thisDate=expensesArray[i].Time;
thisDate = thisDate.slice(2,10); //get month, year from time
thisDate = thisDate.trim(); //remove white spaces
if(thisDate.length=="6") //both date, month are of 1 digit then first character of date is month
 {  month = thisDate.slice(0,1);
 }
 else{
 month=thisDate.slice(0,3);
 month = month.replace(/\//g, ""); //remove forward slashes from month
}
 year=thisDate.slice(-4); //get year from corresponding time

thisType=expensesArray[i].Type;
thisType=thisType.toLowerCase();
thisPrice=parseInt(expensesArray[i].Amount);

if((month==selectedMonth) && (year==selectedYear))
{
    //calculate the sum of each type of expense
    switch (thisType) {
        case "education":
            Education+=thisPrice;
            break;
        case "food":
            Food+=thisPrice;
            break;
        case "grocery":
            Grocery+=thisPrice;
            break;
        case "entertainment":
            Entertainment+=thisPrice;
            break;
        case "grooming":
            Grooming+=thisPrice;
            break;
        case "other":
            Other+=thisPrice;
            break;
        default:
            break;
    }
}
}

//add bar chart acc to calculated values

var expType = ["Education", "Food", "Entertainment", "Grocery", "Grooming", "Other"]; //labels on x-axis
var amount = [Education, Food, Entertainment , Grocery, Grooming, Other]; //corresponding values of y-axis items
var barColors = ["red", "orange","blue","pink","purple", "green"];
document.getElementById("summaryChart").style.display="block"; //make space for bar chart
new Chart("summaryChart", {
  type: "bar",
  data: {
    labels: expType,
    datasets: [{
      backgroundColor: barColors,
      data: amount
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Expense summaries"
    }
  }
});

});