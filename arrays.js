chocolateBars=[ "snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  const moreAr = [element,...array];
  return moreAr;
}


function destructivelyAddElementToBeginningOfArray(xc, bv){
   
   xc.unshift(bv);
   return xc
}

function addElementToEndOfArray (array, element){
  const moreArr = [...array, element];
  return moreArr;

}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;}

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


