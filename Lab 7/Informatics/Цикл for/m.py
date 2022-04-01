n = int(input())

cnt = 0
for i in range(n):
    x = int(input())
    if not x:
        cnt += 1

print(cnt)