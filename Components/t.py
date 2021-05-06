f = open("MaterialCard.js","r+")

for line in f:
    if "case" in line:
        print (line) 