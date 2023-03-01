const test = require("./index");

it("Should return 6", () => {
  expect(test.multiply(2, 4)).toBe(8);
});
