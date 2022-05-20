//20.05.2022

function incrementer(nums) {
  return nums.map((number, index) =>
    Number((number + index + 1).toString().slice(-1))
  );
}
