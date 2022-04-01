def xor(x, y):
    if (x and not y) or (not x and y):
        return 1
    return 0

x = bool(input())
y = bool(input())

print(xor(x, y))