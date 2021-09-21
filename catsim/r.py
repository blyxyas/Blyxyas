"""
 ******************************
 * Important! simple-term-menu required! (pip install simple-term-menu)
 ****************************** """

import menu
from time import sleep
from random import randint
import os
aunt = ["Karen","Deborah","Linda","Susan","Donna","Mary","Brenda",]
uncle = ["Richard","Michael","David","James","Robert","John","Dennis"]

r = randint(0, 6)
r2 = randint(0, 1)
if r2 == 1:
    relative = aunt[r]
else:
    relative = uncle[6]

print("Your new cat(tm) was born!")
name = input("Name of your new cat?\n\n")
age = 0
hunger = 20

stats = {
    "fat": 0,
    "old": 0
}

# * Some messages >
messages = {
    "start": [
        "Your new cat is beautiful! (and fat)",
        "You just adopted a new cat. Congratulations!",
        "Look at you! The name of the cat?",
        f"You're so kind giving a better life to {name}"
    ],
    "hungry": [
        "I'm hungry hooman",
        "I'm hungry",
        "My hunger is above the limit stupid hooman",
        "I'm starving, you bastard",
        "I deserve more food little wanker",
        "Look at my hunger bar! Why you don't work for me?!",
        "Are you crazy? You want your little cat to starve to death?",
        "Ooooh Why did this dimwit adopted me?!",
        f"I'm just a little, little catty cat, just with {age} years old!",
        "Hey, look at my hunger bar, I'm starving"
    ],
    "idle": [
        "Climate change is a lie!",
        "My own kittens are better than you taking care of a cat! (And I don't have kittens)",
        "Where my balls hooman?",
        "Why are you so cruel?",
        "Hooman, listen, here... I hate you!",
        "Hooman, in my little heart, I love you... But not let anyone know about that!",
        "Hooman, you disgust me, with that little sausages without fur in your hands...",
        "I never saw a worst hooman than you! (I never saw other hooman...)",
        "Hooman did you hear about that thing? Va-vaccine I think...",
        "I'm so hungry...",
        "I'm just a humble cat!"
    ]
}

print("Look! Some of your relatives want to congratulate you for your new adquisition!")
res = input("Do you want them to enter your house? [Y: Yes][N: No]\n\n").lower()
sleep(1)
if res == "y":
    r = randint(0, len(messages["start"]) - 1)
    print(f"{relative}: {messages['start'][r]}")
else:
    print("You broke some ties with your family")
# Everything else
sleep(4)
while True:
    print(f"::::::::::::\t\t\t{name}\t\t\t::::::::::::")
    print(f"\t\t\t\tHunger: {hunger}")
    print(f"\t\t\t\t{age} Years Old")
    r = randint(0, 10)
    if r <= 2:
        if r == 0:
            print("Miaw")
        else:
            if hunger > 40 - r:
                r = randint(0, len(messages["hungry"]) - 1)
                print(messages["hungry"][r])
    elif r > 2:
        res = randint(0, len(messages["idle"]) - 1)
        print(messages["idle"][res])
    r = randint(0, 4)
    if r >= 2:
        hunger += 1
    r = randint(0, 7)
    if r  < 1:
        age += 1
    sleep(2)