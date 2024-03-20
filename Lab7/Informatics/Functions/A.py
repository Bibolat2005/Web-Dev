# def cmin(a,b,c,d):
#     if a <= b and a <= c and a <= d:
#         return a
#     elif b <= a and b <= c and b <= d:
#         return b
#     elif c <= a and c <= b and c <= d:
#         return c
#     else:
#         return d
# a,b,c,d = map(int, input().split())
# print(cmin(a,b,c,d))


def min(l):
    min = l[0]
    for i in range(len(l)):
        if l[i] < min:
            min = l[i]
    return min
print(min(list(map(int, input().split()))))