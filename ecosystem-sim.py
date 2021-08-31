"""
README:
Execute main.py to simulate a simple ecosystem.
"""

import time
import random
import os

def population(animal, alias, animal_death):
        r = random.randint(0, 10)
        rn = random.randint(0, animal)
        if r <= alias:
            animal += 1
        if animal_death > animal - rn:
            animal -= 1000
        return animal

rabbit = 100
fox = 100
generation = 0
old_fox = 0
old_rabbit = 0
max_generation = 5000 # * Max number of generation (You can change this value)
message = ""
fox_death = 0
rabbit_death = 0

while True:
    
    fox_alias = fox / 30
    rabbit_alias = rabbit / 20
    
    rabbit_death = rabbit - round(rabbit / 10)
    fox_death = fox - round(fox / 10)
    
    if generation > max_generation:
        break
    else:
        generation += 1
        
    # * If you don't wanna clear the console with each output, you can remove this line below me.
    os.system('cls' if os.name == 'nt' else 'clear') # * <== This line clears the console.
    # ^ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    # * Everything else
    # ^ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    
    # * Display the info of the current (older) generation
    
    print(f"Rabbits: {rabbit}\nFox(s): {fox}\nGeneration: {generation} | {max_generation}\n...\nFox(s) 100 Generations ago: {old_fox}\nRabbits 100 Generations ago: {old_rabbit}\n\n{message}")
    
    if generation % 100 == 0:
        old_fox = fox
        old_rabbit = rabbit
       
       # * Simulate the new generation
    
    def foxeats(animal_eater, old_animal_eater, animal_ate, animal_eater_alias):
        if old_animal_eater < animal_eater:
            r = round(random.random(), 10) * 10
            animal_eater += r
            return animal_eater
        if animal_eater < random.randint(0, animal_ate):
            animal_ate += 1
            return animal_ate
        elif animal_ate < random.randint(0, animal_eater):
            animal_eater_alias + 1.5
        else:
            animal_ate -= 9
            return animal_ate
        
    fox = population(fox, fox_alias, fox_death)
    rabbit = population(rabbit, rabbit_alias, rabbit_death)
    
    if fox > old_fox:
        foxeats(fox, old_fox, rabbit, fox_alias)
       
    
    
    if rabbit == 0:
        message = "Rabbits are extinted :("
    if fox == 0:
        message = "Fox(s) are extinted :("