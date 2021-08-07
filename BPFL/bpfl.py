"""
Blyxyas Personal Function Library
Well... I guess this is just a personal library, you can use this, but I'm not sure if this will work for your situation...
"""

def replace(keyword, replacement, array):
    """
    This function replace a keyword with another, it's very simple.
    """
    
    for element in array:
        if element == keyword:
            array[array.index(keyword)] = replacement
        else:
            continue
    
    return array