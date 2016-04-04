# Yasmeen Roumie
# SoftDev2 pd 3
# HW 6 -- Closure
# 2016-04-01

# TASK:
# Write a closure with outer function named 'repeat'
# such that the function calls shown below will yield the outputs shown.


def repeat(string):
    def times(num):
        return string*num
    return times

#print r1(2) # -> hellohello
#print r2(2) # -> goodbyegoodbye
print repeat('omg')(5) # -> coolcoolcool
