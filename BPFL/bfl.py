"""
Blyxyas' Personal Function Library
Always growing, because I'm always learning about new things.
"""

import random

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
