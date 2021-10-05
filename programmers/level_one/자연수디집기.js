/*
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

제한 조건
n은 10,000,000,000이하인 자연수입니다.
입출력 예
n	    return
12345	[5,4,3,2,1]
*/
const n = 12345;

function solution1(n) {
  const stringNumber = String(n).split("").reverse().join("").split("");
  const answer = [];
  stringNumber.map((element) => {
    answer.push(parseInt(element, 10));
  });
  return answer;
}

// 다른사람 풀이
function solution2(n) {
  return (n + "")
    .split("")
    .reverse()
    .map((n) => parseInt(n));
}

console.log(solution2(n));