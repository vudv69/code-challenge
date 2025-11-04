/**
 * Method 2: Iterative approach using a for loop.
 *
 * - Idea: Incrementally add all integers from 1 to n.
 * - Time complexity: O(n)
 * - Space complexity: O(1)
 * - Pros: Easy to understand, stable for moderate n.
 * - Cons: Slower than the formula for very large n.
 */
export function sumToNIterative(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
