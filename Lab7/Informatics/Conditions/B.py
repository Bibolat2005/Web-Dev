year = int(input())
print("YES" if year % 4 == 0 and year % 100 != 0 or year % 400 == 0 else "NO")



"""
a = int(input())

if (a % 4 == 0 and a % 100 != 0) or (a % 400 == 0):
    print("YES")
else:
    print("NO")
"""