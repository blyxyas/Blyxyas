"""
README:
Execute main.py to simulate a simple ecosystem.
"""

import time
from random import randint
import os


rabbit = 0
fox = 0
generation = 0
max_generation = 1000 # * Max number of generation (You can change this value)

while True:
    # * If you don't wanna clear the console with each output, you can remove this line below me.
    os.system('cls' if os.name == 'nt' else 'clear') # * <== This line clears the console.
    
    # ^ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    # * Everything else
    # ^ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    
    # * Display the info of the current (older) generation
    
    print(f"Rabbits: {rabbit}")
    print(f"Fox(s): {fox}")
    print(f"Generation: {generation} | {max_generation}")
    
    if generation % 2 == 0:
        old_fox = fox
        old_rabbit = rabbit
    if generation % 3 == 0:
       older_fox = fox
       older_rabbit = rabbit
       
       # * Simulate the new generation
    
    def population(animal, alias):
        r = randint(0, 10)
        if r < alias:
            animal += 1
        return animal
    
    def foxeats():
        if old_fox < fox:
            
        
    
    fox = population(fox, 2)
    rabbit = population(rabbit, 4)
    
    if fox > old_fox:
        foxeats(old_fox, fox, rabbit, old_rabbit)
    
       
    generation += 1
    time.sleep(0.4)