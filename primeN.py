import math
n = 4
#index is the count of dividers the number's got
index = 0
for counter in range(1, n+1):
    if n/counter == math.trunc(n/counter):
        index = index + 1
if index > 2 or n == 1:
    print('not a prime number')
else:
    print('prime numebr')
