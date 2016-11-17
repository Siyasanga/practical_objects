// mostWordsEndWith() takes in a string called text
// It returns character with its frequency that most words in the text end with.
function mostWordsEndWith(text){
  var worldList = text.split(' ');
  var endCount = {};
  var counter = 0;
  var char = '';
  for(i in worldList){
    // last char of the word
    lastChar = worldList[i].substring(worldList[i].length -1);
    if(endCount[lastChar] == undefined){
      endCount[lastChar] = 1;
    }
    else {
      endCount[lastChar]++;
      if(endCount[lastChar] > counter){
        counter = endCount[lastChar];
        char = lastChar;
      } // End of if
    } // End of Else
  } // End of forIn loop
  return char+": "+counter;
} // End of mostWordsEndWith
const assert = require('assert');
var text = 'Down by the river there is a man that quiver and shiver, but he needs to deliver a packet that he think is a big racket and a packet of of gum.'
//console.log(text);
assert.equal(mostWordsEndWith(text),'t: 6');
