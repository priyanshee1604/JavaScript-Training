// for each method
function printFunction(value, key, map){
    console.log(`${key}. ${value}.`);
}

function printOnlyKeys(value, key, map){
    console.log(`${key}`);
}

const map1 = new Map();
map1.set('1', 'priyanshee');
map1.set('2', 'sisodiya');
map1.set('3', 'parnika');
map1.set('4', 'rangrekar');

map1.forEach(printFunction);

//get method
console.log(`${map1.get(`1`)}`);
console.log(`${map1.get(`5`)}`);
console.log(`${map1.has(`1`)}`);
console.log(`${map1.has(`5`)}`);

//key method
const it = map1.keys();
console.log(it);
map1.forEach(printOnlyKeys);