// findItemsOver() takes a list of objects each with a name and price attribute.
// And also a second parameter which is a threshold for the item price.
// It returns products more Expensive than the threshold.
function findItemsOver(list, bar){
  var expensive = [];
  for(i in list){
    if(list[i].price > bar){
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
console.log(findItemsOver(shoppingList,23));
