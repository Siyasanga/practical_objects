// findItemsOver20() takes a list of objects, each object having 2 attributes
// one called name and the other price.
// It returns all the products that have a price more than R20.
function findItemsOver20(list){
  var expensive = [];
  for(i in list){
    if(list[i].price > 20){
      expensive.push(list[i]);
    }
  }
  return expensive;
}
var shoppingList = [
    { itemName : 'Apples', price : 7.50 },
    { itemName : 'Bread', price : 24.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 23.00 },
    { itemName : 'Melrose', price : 27.50 }
];
const assert = require('assert');
var result = findItemsOver20(shoppingList,20);
assert.deepEqual(result,[{ itemName : 'Bread', price : 24.00 },{ itemName : 'Cheese', price : 23.00 },{ itemName : 'Melrose', price : 27.50 }])
