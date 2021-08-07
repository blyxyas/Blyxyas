target = 2
listing = [
    1, 2, 3, 4, 5, 6, 7, 8, 9
]

"""
* There's a Tom Scott's video for this... (https://www.youtube.com/watch?v=RGuJga2Gl_k)
"""
for number in listing:
    if number == target:
        print(
            f"Target Targeted!\nIndex: {listing.index(target)}\nTarget: {target}\nFound between others {len(listing) - 1} elements"
            )
        
    else:
        continue