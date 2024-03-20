x = int(input())
result = ""
x = str(x)
for i in range(len(x)-1, -1, -1):
    result += x[i]

print(int(result))

"""
x = int(input())

print(str(x)[::-1].lstrip('0'))
"""