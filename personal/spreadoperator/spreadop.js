const obj1 = { a: 1, nested: { x: 10 } };
const obj2 = { a: 2, nested: { y: 20 } };

const combined = { ...obj1, ...obj2 };

console.log(combined);

// {a: 1, nested: { x: 10 }, a: 2, nested: { y: 20 }}