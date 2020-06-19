import GameSavingLoader from '../GameSavingLoader';
import json from '../parser';
import read from '../reader';

test('should test GameSavingLoader', () => {
  expect.assertions(1);

  const dataIn = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

  const expected = JSON.stringify({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  });

  return GameSavingLoader.load(dataIn).then((saving) => {
    expect(saving).toEqual(expected);
  }).catch((e) => expect(e).toEqual(new Error('error')));
});

test('should test GameSavingLoader Error', () => {
  expect.assertions(1);

  const expected = JSON.stringify({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  });

  return GameSavingLoader.load().then((saving) => {
    expect(saving).toEqual(expected);
  }).catch((e) => expect(e).toEqual(new Error('error')));
});


test('should test parser-reader', () => {
  expect.assertions(1);

  const dataIn = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

  const expected = JSON.stringify({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  });

  return read(dataIn).then((data) => json(data)).then((value) => {
    expect(value).toEqual(expected);
  }).catch((e) => expect(e).toEqual(new Error('error')));
});

test('should test parser-reader Error', () => {
  expect.assertions(1);

  const expected = JSON.stringify({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  });

  return read().then((data) => json(data)).then((value) => {
    expect(value).toEqual(expected);
  }).catch((e) => expect(e).toEqual(new Error('error')));
});

