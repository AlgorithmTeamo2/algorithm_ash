N, M = map(int, input().split())
number_list = list(map(int, input().split()))
result = []

if N != len(number_list):
    raise BaseException

for i in range(N):
    for j in range(i + 1, N):
        for k in range(j + 1, N):
            if number_list[i] + number_list[j] + number_list[k] <= M:
                result.append(number_list[i] + number_list[j] + number_list[k])
print(max(result))
