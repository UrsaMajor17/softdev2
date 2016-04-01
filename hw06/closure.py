def h(x):
    return lambda y: x + y

print h(1)
print h(2)
print h(1)(3)
print h(2)(5)
