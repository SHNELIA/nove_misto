function myFlat(arr) {
  let result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...myFlat(item));
    } else {
      result.push(item);
    }
  }
  
  return result;
}

const arr = [1, [2, [3, 4], 5], 6];

console.log(myFlat(arr));