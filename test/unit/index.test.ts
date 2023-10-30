import { sum } from '#app/cal/index.js';

test('basic', () => {
  expect(sum()).toBe(0);
});

test('basic again', () => {
  expect(sum(1, 2)).toBe(3);
});
