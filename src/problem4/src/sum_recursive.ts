/**
 * Method 3: Recursive implementation.
 *
 * - Idea: sum(n) = n + sum(n - 1)
 * - Time complexity: O(n)
 * - Space complexity: O(n) due to recursion stack.
 * - Pros: Elegant and concise.
 * - Cons: Stack overflow risk for large n.
 */
export function sumToNRecursive(n: number): number {
  if (n <= 1) return n;
  return n + sumToNRecursive(n - 1);
}
