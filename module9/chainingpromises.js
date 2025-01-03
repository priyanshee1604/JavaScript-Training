// const fetchPromise1 = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
// );
// const fetchPromise2 = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
// );
// const fetchPromise3 = fetch(
//   "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
// );

// Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
//   .then((responses) => {
//     for (const response of responses) {
//       console.log(`${response.url}: ${response.status}`);
//     }
//   })
//   .catch((error) => {
//     console.error(`Failed to fetch: ${error}`);
//   });
const urls = [
  'https://fakestoreapi.com/products/1',
  'https://fakestoreapi.com/products/2',
  'https://fakestoreapi.com/products/3',
  'https://fakestoreapi.com/products/4',
  'https://fakestoreapi.com/products/5'
];

async function tofetchanddisplaydata(url) {
  try {
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      return data; 
      // console.log(`success`);
    } else {
      console.log('Failed to fetch from', url, 'Status:', res.status);
    }
  } catch (error) {
    console.log(error);
  }
}

const responses = Promise.all(urls.map(url => tofetchanddisplaydata(url)));
