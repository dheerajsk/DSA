

function twoSum(arr, target) {
    arr.sort((a, b) => a - b); //nlogn
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {  // n
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      } else if (arr[i] + arr[j] > target) {
        j--;
      } else {
        i++;
      }
    }
    return [];
  }
  const arr = [3, 5, -9, 8, 11, 1, -1, 6];
  console.log(twoSum(arr, 10));

  // T(n) => n+nlogn => nlogn