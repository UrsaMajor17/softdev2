def fib(n):
  if n==1:
    return 1
  else:
    return fib(n-1) + fib(n-2)

# fib(5)
# fib(4) + fib(3)
# fib(3) + fib(2) + fib(2) + fib(1)
# fib(2) + fib(1) + fib(1) + fib(0) + fib(1) + fib(0) + 1
# O(2^n)
