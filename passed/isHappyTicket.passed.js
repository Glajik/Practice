import isHappyTicket from '../src/isHappyTicket';

test('is happy ticket', () => {
  expect(isHappyTicket('060006')).toBe(true);
  expect(isHappyTicket(123321)).toBe(true);
  expect(isHappyTicket(341800)).toBe(true);
  expect(isHappyTicket(812146)).toBe(true);
});

test('is not happy ticket', () => {
  expect(isHappyTicket('000001')).toBe(false);
  expect(isHappyTicket(123567)).toBe(false);
  expect(isHappyTicket(213612)).toBe(false);
});
