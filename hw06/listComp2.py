def strength_rate(p):
  l = [1 if x in UC_LETTERS else
       2 if x in LC_LETTERS else
       3 if x in NUMERALS else
       4 if x in chars else
       0 for x in p]
  uc = len(p) - l.count(1)
  lc = len(p) - l.count(2)
  nums = len(p) - l.count(3)
  chrs = len(p) - l.count(4)
