/**
 * Method 1: Mathematical formula (Gauss)
 *
 * Formula: 1 + 2 + 3 + ... + n = n * (n + 1) / 2
 *
 * - Time complexity: O(1)
 * - Space complexity: O(1)
 * - Pros: Fastest, very efficient.
 * - Cons: Might overflow for huge n values near Number.MAX_SAFE_INTEGER.
 */
export function sumToNFormula(n: number): number {
  return (n * (n + 1)) / 2;
}
