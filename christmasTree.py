n = 5
pattern = ''
index = 0
#first |
for first in range(0,n+1):
    #add n times blank space
    pattern = pattern + ' '
#in the middle is the |
pattern = pattern + '|'
#rest of the symbols
for i in range(1,n):
    #first add a new line
    pattern = pattern + '\n'
    #we need a variable (index) to count how many
    #times we add blank space (for each line the number is 
    #going to be smaller, because of the more stars)
    index+=1

    for space in range(index,n+1):
        #add blank space
        pattern = pattern + ' '
    
    for a in range(0,i):
        #this one add stars BEFORE the line in the middle
        #a is compared to i, because i doesn't reset
        pattern = pattern + '*'
    #add the line in the middle
    pattern = pattern + '|'

    for b in range(0,i):
        #this one is for AFTER the line
        pattern = pattern + '*'
#print
print(pattern)