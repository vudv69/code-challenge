import { sumToNFormula } from "../src/sum_formula";

describe("sumToNFormula()", () => {
  test("should return 0 for n=0", () => {
    expect(sumToNFormula(0)).toBe(0);
  });

  test("should return correct small values", () => {
    expect(sumToNFormula(1)).toBe(1);
    expect(sumToNFormula(2)).toBe(3);
    expect(sumToNFormula(5)).toBe(15);
    expect(sumToNFormula(10)).toBe(55);
  });

  test("should handle large n correctly", () => {
    expect(sumToNFormula(1000)).toBe(500500);
    expect(sumToNFormula(100000)).toBe(5000050000);
  });

  test("should work for consecutive numbers", () => {
    for (let n = 1; n <= 50; n++) {
      const expected = (n * (n + 1)) / 2;
      expect(sumToNFormula(n)).toBe(expected);
    }
  });
});
