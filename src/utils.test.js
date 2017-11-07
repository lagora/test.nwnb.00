import {
  // domBinder,
  xyzToString,
} from './utils';

// test('Check if domBinder(document)(selector) call document.querySelector(selector)', () => {
//   const fakeDocument = {
//     querySelector: selector => expect(selector).toBe('#lorem'),
//   };
//   const spy = jest.spyOn(document, 'querySelector');
//   domBinder(fakeDocument, '#lorem');
//   expect(spy).toHaveBeenCalled();
// });

test('Check if xyzToString({ x: 1, y: 2, z: 3 }) return "1 2 3" ', () =>
  expect(xyzToString({ x: 1, y: 2, z: 3 })).toBe('1 2 3'));
