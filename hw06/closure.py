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

r1 = repeat('omg')
print r1(3)

# decorator
# @<decorator>
# def show_index():
