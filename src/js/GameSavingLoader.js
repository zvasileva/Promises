import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load(dataIn) {
    const result = read(dataIn).then((data) => json(data)).then((value) => value);
    console.log(result);
    return result;
  }
}
