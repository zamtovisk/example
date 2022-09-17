import math
start_number = 1
finish_number = 20
#index is the sum of all dividers for the number given
index = 0
for start_number in range(start_number,finish_number+1):
    for counter in range(1, start_number+1):
        if start_number/counter == math.trunc(start_number/counter):
            index = index + 1
    if index > 2 or start_number == 1:
        #don't print, because it isn't a prime number and reset index
        index = 0
    else:
        print(start_number)
        index = 0
