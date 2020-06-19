// TODO: write your code here
import sum from './basic';

import GameSavingLoader from './GameSavingLoader';

console.log('worked');

console.log(sum([1, 2]));

const dataIn = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

GameSavingLoader.load(dataIn).then((saving) => {
  console.log(saving);
}).catch((error) => {
  console.error(error);
});
