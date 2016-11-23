// determine which of their departments are the most profitable
// Returns a string with the day that has the most sales
function mostProfitableDepartment(salesData){
  var maxDep = 0;
  var daySales = {};
  var department;
  // Calculating totals with for-loop
  for (i in salesData){
    if(daySales[salesData[i].day] == undefined){
      daySales[salesData[i].day] = salesData[i].sales;
    }
    else {
      daySales[salesData[i].day] = daySales[salesData[i].day] + salesData[i].sales;
    }
  } // end of for-loop
  // Looking for the most profitable department
  console.log(daySales);
  for(i in daySales){
    if(i == undefined)
      break;
    if(daySales[i] > maxDep){
      maxDep = daySales[i];
      department = i;
    }
  }
  return (department+": R"+daySales[department]);
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
assert.equal(mostProfitableDepartment(salesData),'Thursday: R36116');
