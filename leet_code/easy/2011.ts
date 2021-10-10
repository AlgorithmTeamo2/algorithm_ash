/*
Input: operations = ["--X","X++","X++"]
Output: 1
Explanation: The operations are performed as follows:
Initially, X = 0.
--X: X is decremented by 1, X =  0 - 1 = -1.
X++: X is incremented by 1, X = -1 + 1 =  0.
X++: X is incremented by 1, X =  0 + 1 =  1.
*/
// const operations = ["--X", "X++", "X++"];
const operations = ["++X", "++X", "X++"];
function finalValueAfterOperations(operations: string[]): number {
  // reduce 를써서 해보자
  let result: number = 0;
  operations.map((operation) => {
    return operation === "--X" || operation === "X--" ? --result : ++result;
  });

  return result;
}

console.log(finalValueAfterOperations(operations));
