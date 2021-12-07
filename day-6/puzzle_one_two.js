const test_input = [3, 4, 3, 1, 2];
const test_noOfdays = 80;

const input = [
  1, 1, 1, 1, 3, 1, 4, 1, 4, 1, 1, 2, 5, 2, 5, 1, 1, 1, 4, 3, 1, 4, 1, 1, 1, 1,
  1, 1, 1, 2, 1, 2, 4, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 5, 1, 1, 2, 1, 5, 1, 1, 1,
  1, 1, 1, 1, 1, 4, 3, 1, 1, 1, 2, 1, 1, 5, 2, 1, 1, 1, 1, 4, 5, 1, 1, 2, 4, 1,
  1, 1, 5, 1, 1, 1, 1, 5, 1, 3, 1, 1, 4, 2, 1, 5, 1, 2, 1, 1, 1, 1, 1, 3, 3, 1,
  5, 1, 1, 1, 1, 3, 1, 1, 1, 4, 1, 1, 1, 4, 1, 4, 3, 1, 1, 1, 4, 1, 2, 1, 1, 1,
  2, 1, 1, 1, 1, 5, 1, 1, 3, 5, 1, 1, 5, 2, 1, 1, 1, 1, 1, 4, 4, 1, 1, 2, 1, 1,
  1, 4, 1, 1, 1, 1, 5, 3, 1, 1, 1, 5, 1, 1, 1, 4, 1, 4, 1, 1, 1, 5, 1, 1, 3, 2,
  2, 1, 1, 1, 4, 1, 3, 1, 1, 1, 2, 1, 3, 1, 1, 1, 1, 4, 1, 1, 1, 1, 2, 1, 4, 1,
  1, 1, 1, 1, 4, 1, 1, 2, 4, 2, 1, 2, 3, 1, 3, 1, 1, 2, 1, 1, 1, 3, 1, 1, 3, 1,
  1, 4, 1, 3, 1, 1, 2, 1, 1, 1, 4, 1, 1, 3, 1, 1, 5, 1, 1, 3, 1, 1, 1, 1, 5, 1,
  1, 1, 1, 1, 2, 3, 4, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 3, 2, 2, 1, 3, 5,
  1, 1, 4, 4, 1, 3, 4, 1, 2, 4, 1, 1, 3, 1,
];
const noOfdays = 256;

const findTotalNoOfLantern = (fishes, days) => {
  const fishLifeMap = {};
  fishes.forEach((fish) => {
    fishLifeMap[fish] = fishLifeMap[fish] ? fishLifeMap[fish] + 1 : 1;
  });
  for (let day = 0; day <= days; day++) {
    for (let i = 0; i <= 8; i++) {
      fishLifeMap[i - 1] = fishLifeMap[i];
    }
    fishLifeMap[6] =
      (fishLifeMap[6] ? fishLifeMap[6] : 0) +
      (fishLifeMap[-1] ? fishLifeMap[-1] : 0);
    fishLifeMap[8] = fishLifeMap[-1];
  }
  let sum = 0;
  for (let i = 0; i < 8; i++) {
    sum = sum + (fishLifeMap[i] ? fishLifeMap[i] : 0);
  }
  return sum;
};

const printTotalNoOfLanterns = () => {
  const count = findTotalNoOfLantern(input, 80);
  console.log("No of lantern Fishes after 80 days", count);
  const fishCount = findTotalNoOfLantern(input, 256);
  console.log("No of lantern Fishes after 256 days", fishCount);
};

module.exports = {
  printTotalNoOfLanterns,
};
