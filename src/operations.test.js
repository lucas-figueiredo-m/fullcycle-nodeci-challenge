const { multiply } = require("./operations");

describe("Test all operations", () => {
  test("Should return 6", () => {
    expect(multiply(2, 4)).toBe(8);
  });
});
