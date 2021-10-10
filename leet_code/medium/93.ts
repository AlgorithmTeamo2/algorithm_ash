/*
  문제 내용을 요약하자면 가능한 IP 주소를 모두 반환
*/

function backtrack(
  res: string[],
  s: string,
  curr: string[] = [],
  i: number = 0
) {
  if (curr.length === 4) {
    res.push(curr.join("."));
    return;
  }
  const charsLeft: number = s.length - i;
  const groupsLeft: number = 4 - curr.length;

  const minLen: number = groupsLeft === 1 ? charsLeft - groupsLeft + 1 : 1;
  const maxLen: number =
    s[i] === "0" ? 1 : Math.min(3, charsLeft - groupsLeft + 1);

  for (let len = minLen; len <= maxLen; len++) {
    let num: number = Number(s.substr(i, len));
    if (num > 255) continue;
    curr.push(String(num));
    backtrack(res, s, curr, i + len);
    curr.pop();
  }
}

function restoreIpAddresses(s: string): string[] {
  if (s.length < 4 || s.length > 12) return [];
  const res = [];
  backtrack(res, s);
  return res;
}

console.log(restoreIpAddresses("25525511135"));
