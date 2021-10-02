import sys
answer      = [0] * 1001
triangleNum = [1]

[triangleNum.append(triangleNum[i-1] + (i+1)) for i in range(1 ,45)]

for one in triangleNum:
    for two in triangleNum:
        for three in triangleNum:
            if one + two + three <= 1000:
                answer[one + two + three] = 1

input = sys.stdin.readline

T = int(input())
K = []
for _ in range(T):
    K.append(int(input()))

for target in K:
    print(answer[target])

