a = int(input())
b = int(input())

if a < 0:
    print((109 - ((-a * b) % 109)) % 109)
else:
    print((a * b) % 109)