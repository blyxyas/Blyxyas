"""
README 2:
"""

import sys

with open("template.blyx") as f:
    file = f.read()

list_ = file.split(" ") 

n = 0
while n < len(list_):
    
    arg = list_[n]
    
    err = f"Error in argument {n} ({arg}): \n"
    function_name = ""

    if arg == "func":
        if list_[n + 1].split()[-1] != ".":
            print(err)
            print("Function must end with a \".\"")
            sys.exit()
        else:
         print(f"Line {n}")
        
         
    

    n += 1