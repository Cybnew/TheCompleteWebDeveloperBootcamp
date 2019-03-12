var items = prompt("how many items would you like in your array?");

function oddArray(count) {
  var nums = [1];
  var sum = 0;
  for (i = 0; i < count - 1; i++) {
    nextNum = nums[i] + 2;
    nums.push(nextNum);
  }
  console.log(nums);

  for (i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  console.log(sum);
}
oddArray(items);
