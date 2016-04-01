# Yasmeen Roumie
# SoftDev2 pd 3
# HW 6 -- Closure
# 2016-04-01

def f(x):
    def g(y):
        return x + y
    return g

print f(1)(2)
