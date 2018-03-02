import formattedTime from '../src/formattedTime';

test('formattedTime', () => {
  expect(formattedTime(5)).toBe('00:05');
  expect(formattedTime(15)).toBe('00:15');
  expect(formattedTime(60)).toBe('01:00');
  expect(formattedTime(67)).toBe('01:07');
  expect(formattedTime(130)).toBe('02:10');
  expect(formattedTime(175)).toBe('02:55');
  expect(formattedTime(600)).toBe('10:00');
  expect(formattedTime(754)).toBe('12:34');
  expect(formattedTime(1293)).toBe('21:33');
});