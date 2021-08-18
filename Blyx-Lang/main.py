"""
README 2:
"""

import sys

with open("output.txt", "w") as new:
    new.write("")

with open("Template.blyx") as f:
    file = f.read()

list_ = file.split(" ") 

def writing(argument):
    with open("output.txt", "a") as fl:
        fl.write(argument)

n = 0
while n < len(list_):
    print("Loop Entered")
    arg = list_[n]
    
    err = f"Error in argument {n} ({arg}): \n"
    function_name = ""

    print("function detect ed")
    if arg.startswith("\n--"):
        # * That's a function
        function_name = arg[3:-3]
        writing(f"def {function_name}:")
        
        in_function = True
        
    while in_function == True:
        arg = "\t".join(arg)
        break
    else:
        sys.exit()

    n += 1