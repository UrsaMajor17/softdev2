# Write a function that uses list comprehension to return
# whether a password meets a minimum threshold:
# it contains a mixture of upper- and lowercase letters, and at least one number.
def checkPass(password):
    UC_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    LC_LETTERS = "abcdefghijklmnopqrstuvwxyz"
    numbers = "1234567890"
    print [1 if x in UC_LETTERS else 2 if x in LC_LETTERS else 3 if x in numbers else 0 for x in password]

checkPass("helloabc123HI@?*&")
