# Yasmeen Roumie
# SoftDev2 pd 3
# HW 6 -- List Comprehension
# 2016-03-31

# Write a function that uses list comprehension to return
# whether a password meets a minimum threshold:
# it contains a mixture of upper- and lowercase letters, and at least one number.

def checkPass(password):
    UC_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    LC_LETTERS = "abcdefghijklmnopqrstuvwxyz"
    numbers = "1234567890"
    stuff = [1 if x in UC_LETTERS else 2 if x in LC_LETTERS else 3 if x in numbers else 0 for x in password]
    if (1 in stuff and 2 in stuff and 3 in stuff):
        return True
    else:
        return False

print checkPass("helloabc123HI@?*&")
print checkPass("hello")
                
# Write a function that uses list comprehension to return
# a password's strength rating. This function should return a
# low integer for a weak password and a higher integer
# for a stronger password. (Suggested scale: 1-10)

def passStrength(password):
    strength = 0
    UC_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    LC_LETTERS = "abcdefghijklmnopqrstuvwxyz"
    numbers = "1234567890"
    symbols = "~!@#$%^&*()_+-[]{}|\/?><.,;:'"
    stuff = [1 if x in UC_LETTERS else 2 if x in LC_LETTERS else 3 if x in numbers else 4 if x in symbols else 0 for x in password]
    if (1 in stuff):
        strength += 2
    if (2 in stuff):
        strength += 2
    if (3 in stuff):
        strength += 2
    if (4 in stuff):
        strength += 2
    if (len(stuff) >= 10):
        strength += 2
    print "Password Strength (0-10): " + str(strength)

passStrength("abc123ABC")
