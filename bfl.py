"""
Blyxyas' Personal Function Library
Always growing, because I'm always learning about new things.

Functions:
    - Replace(keyword, replacement, array, max_iterations)
    - Shuffle(array)

"""

import random
import time

"""
Some color to print in console. Usage:

import bfl as b

print(b.color.BOLD + "text" + b.color.END) for example.
"""

class color:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

def replace(keyword, replacement, array, max_iterations):
    """
    This function replace a keyword with another in an array, it's very simple.
    The user can put in the number of iterations he wants to do.
    BUT if max_iterations is set to -1, the max iterations are infinite.
    
    """
    if max_iterations == 0:
        for element in array:
            if element == keyword:
                array[array.index(keyword)] = replacement
            else:
                continue
    else:
        i = 0
        while i <= max_iterations: 
            for element in array:
                if element == keyword:
                    array[array.index(keyword)] = replacement
                else:
                    continue
            i += 1
        
    return array


def shuffle(array):
    # * Shuffle an array
    random.shuffle(array)
    return array

