
let timeIntervals = process.argv.slice(2);
// console.log(timeIntervals);
let orderedTime = timeIntervals.sort(function(a, b) {
  return a - b;
});
// console.log(orderedTime);
 
for (const time of orderedTime) {
  if (time >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000);
  }
}