# fib(5)
# fib(4) + fib(3)
# fib(3) + fib(2) + fib(2) + fib(1)
# fib(2) + fib(1) + fib(1) + fib(0) + fib(1) + fib(0) + 1
# fib(1) + fib(0) + 1 + 1 + 0 + 1 + 0 + 1
# runtime: O(2^n)

# def fib(n):
#     if n==1:
#         return 1
#     else:
#         return fib(n-1) + fib(n-2)

def memoize(f):
    memo = {} # hashmap/dictionary for O(1) lookup
    def inner(x):
        if x not in memo:
            memo[x] = f(x)
        return memo[x]
    return inner

def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

@memoize
def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

print fib(0)
print fib(1)
print fib(2)
print fib(3)
print fib(4)
