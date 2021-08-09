
# * This is the optimized approach (Optimized just by like 0.008 s) ↓
import time
start_time = time.time()

desired = 100 # * desired number of iterations, you can change it

for x in range(desired + 1):
    output = ""
    if x % 3 == 0:
        output += "Fizz"
        if x % 5 == 0:
            output += "Buzz"
    elif x % 5 == 0:
            output = "Buzz"
    if output == "":
        print(x)
    else:
        print(output)
        
print("--- %s seconds ---" % (time.time() - start_time))