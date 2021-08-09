
# * This is the optimized approach (Optimized just by like 0.008 s) ↓
import time
start_time = time.time()

for x in range(101): # * ← This can be whatever you want
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