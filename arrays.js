chocolateBars=[ "snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  const moreAr = [element,...array];
  return moreAr;
}

var xc = 'foo';
var bv=[1]
function destructivelyAddElementToBeginningOfArray(xc, bv){
   console.log(xc)
   return xc.unshift(bv);
}

function addElementToEndOfArray (array, element){
  return array.push(element);
}

function destructivelyAddElementToEndOfArray(array, element){
  const moreArr = [...array, element];
  return moreArr;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift();
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(lal){
  
  return (lal.pop());
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length-1);
}


