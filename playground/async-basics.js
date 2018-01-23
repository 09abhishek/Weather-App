console.log('Starting app');

setTimeout(() => {
  console.log('Indside of callback');
}, 2000);

setTimeout(() => {
  console.log('Indside of 2nd callback');
}, 1000);
setTimeout(() => {
  console.log('Indside of 3rd callback');
}, 0);

console.log('Finishing up');
