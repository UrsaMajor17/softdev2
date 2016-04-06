def pt(n):
    retL = []
    x = 1
    for a in range(x,n):
        for b in range(a,n):
            for c in range(b,n):
                if ((a*a) + (b*b) == (c*c)):
                    retL.append([a,b,c])
    return retL

print pt(6) # [[3, 4, 5], [4, 3, 5]]

def pt2(n):
    # use tuples
    return [(a,b,c) for a in range(1,n)
                    for b in range(a,n)
                    for c in range(b,n)
                    if ((a*a) + (b*b) == (c*c))]

print pt2(6)
