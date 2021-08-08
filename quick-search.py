import random
import bfl as b
"""
* There's a Tom Scott's video for this... (https://www.youtube.com/watch?v=RGuJga2Gl_k)
* btw this isn't my algorithm, but it's my code, and I don't remember the original name.

^ WORK IN PROGRESS
"""

listing = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100
]

def quicksearch(target, array):
    pivot = round(len(array) / 2 - 1)
    while pivot != target:
        print(f"Pivot ({pivot} != target ({target}))")
        if target < pivot:
            print(f"target ({target}) < pivot ({pivot})")
            pivot = pivot - round(pivot / 2)
        elif target > pivot:
            print(f"target ({target}) > pivot ({pivot})")
            pivot = pivot + round(pivot / 2) + 1
    else:
            print(f"pivot = {pivot} && target = {target}")

quicksearch(2, listing)
print(b.color.OKGREEN + "Done!" + b.color.ENDC)