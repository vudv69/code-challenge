import { sumToNIterative } from "../src/sum_iterative";

describe("sumToNIterative()", () => {
  test("should return 0 for n=0", () => {
    expect(sumToNIterative(0)).toBe(0);
  });

  test("should return correct small values", () => {
    expect(sumToNIterative(1)).toBe(1);
    expect(sumToNIterative(2)).toBe(3);
    expect(sumToNIterative(5)).toBe(15);
    expect(sumToNIterative(10)).toBe(55);
  });

  test("should handle moderately large n", () => {
    expect(sumToNIterative(1000)).toBe(500500);
    expect(sumToNIterative(50000)).toBe(1250025000);
  });

  test("should produce the same result as formula method", () => {
    for (let n = 1; n <= 100; n++) {
      const expected = (n * (n + 1)) / 2;
      expect(sumToNIterative(n)).toBe(expected);
    }
  });
});
