// determine which of their departments are the most profitable
function mostProfitableDepartment(salesData){
  var maxSales = 0;
  var maxDep;
  for (i in salesData){
    if(salesData[i].sales > maxSales){
      maxSales = salesData[i].sales;
      maxDep = salesData[i];
    }
  } // end of for-loop
  return maxDep;
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
// Next we get the most profitable department.
assert.equal(mostProfitableDepartment(salesData)['department'],'outdoor');
// Next we get the most profitable day.
assert.equal(mostProfitableDepartment(salesData)['day'],'Thursday');
