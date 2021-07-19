var globalArray = [1, 30, 4, 21, 100000];
function nonMutatingSort(arr) {
  // Only change code below this line
  let returnedArray = [... arr];

  return returnedArray.sort( (a,b) => a===b ? 0 : a<b ? -1 : 1);


  // Only change code above this line
}
console.log(globalArray);
console.log(nonMutatingSort(globalArray));