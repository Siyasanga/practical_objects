// determine which of their departments are the most profitable
// Returns a string with the department that has the most sales
function mostProfitableDepartment(salesData){
  var maxDep = 0;
  var depSales = {};
  var department;
  // Calculating totals with for-loop
  for (i in salesData){
    if(depSales[salesData[i].department] == undefined){
      depSales[salesData[i].department] = salesData[i].sales;
    }
    else {
      depSales[salesData[i].department] = depSales[salesData[i].department] + salesData[i].sales;
    }
  } // end of for-loop
  // Looking for the most profitable department
  for(i in depSales){
    if(i == undefined)
      break;
    if(depSales[i] > maxDep){
      maxDep = depSales[i];
      department = i;
    }
  }
  return (department+": R"+depSales[department]);
} // End of mostProfitableDepartment
var salesData = [
    {department : 'hardware', sales : 4500, day : 'Monday'},
    {department : 'outdoor', sales : 1500, day : 'Monday'},
    {department : 'carpentry', sales : 5500, day : 'Monday'},
    {department : 'hardware', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
    {department : 'hardware', sales : 1500, day : 'Wednesday'},
    {department : 'outdoor', sales : 8507, day : 'Wednesday'},
    {department : 'carpentry', sales : 8009, day : 'Wednesday'},
    {department : 'hardware', sales : 12000, day : 'Thursday'},
    {department : 'outdoor', sales : 18007, day : 'Thursday'},
    {department : 'carpentry', sales : 6109, day : 'Thursday'},
    {department : 'hardware', sales : 7005, day : 'Friday'},
    {department : 'outdoor', sales : 12006, day : 'Friday'},
    {department : 'carpentry', sales : 16109, day : 'Friday'},
];
const assert = require('assert');
console.log(mostProfitableDepartment(salesData));
// Next we get the most profitable department.
// assert.equal(mostProfitableDepartment(salesData)['department'],'outdoor');
// Next we get the most profitable day.
// assert.equal(mostProfitableDepartment(salesData)['day'],'Thursday');
