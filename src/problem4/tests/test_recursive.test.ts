import { sumToNRecursive } from "../src/sum_recursive";

describe("sumToNRecursive()", () => {
  test("should return 0 for n=0", () => {
    expect(sumToNRecursive(0)).toBe(0);
  });

  test("should return correct small values", () => {
    expect(sumToNRecursive(1)).toBe(1);
    expect(sumToNRecursive(2)).toBe(3);
    expect(sumToNRecursive(5)).toBe(15);
    expect(sumToNRecursive(10)).toBe(55);
  });

  test("should handle moderate n safely", () => {
    expect(sumToNRecursive(20)).toBe(210);
    expect(sumToNRecursive(50)).toBe(1275);
  });

  test("should produce same results as the formula method for small n", () => {
    for (let n = 1; n <= 100; n++) {
      const expected = (n * (n + 1)) / 2;
      expect(sumToNRecursive(n)).toBe(expected);
    }
  });
});
