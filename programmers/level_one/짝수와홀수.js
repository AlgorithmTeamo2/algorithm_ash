/*
정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

제한 조건
num은 int 범위의 정수입니다.
0은 짝수입니다.
입출력 예
num	  return
3	    "Odd"
4	    "Even"
*/
const n = 3;

function solution(num) {
  return num % 2 ===0 ? "Even" : "Odd";
}

console.log(solution(n));

// 다른사람 풀이보기

function evenOrOdd(num) {
  return num % 2 ? "Odd" : "Even";
  // 0 은 false 라는 발상을 생각했음 
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + evenOrOdd(2));
console.log("결과 : " + evenOrOdd(3));