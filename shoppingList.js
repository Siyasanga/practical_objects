function shoppingList(list){
  var total = 0;
  for(i in list){
    total = total + list[i].price;
  }
  return total;
}

var shoppingList1 = [
    { itemName : 'Apples', price : 7.50 },
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 23.00 },
    { itemName : 'Bread', price : 9.50 }
];

var shoppingList2 = [
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 19.50 }
];
const assert = require('assert');
assert.equal(shoppingList(shoppingList1),58);
assert.equal(shoppingList(shoppingList2),37.5);
