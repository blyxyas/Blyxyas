import random

# First, ask the mode.
print(f"Mode:  \t\t\t\tID\n-------\t\t\t\t-------\nMain (89 Characters)\t1\nAll Unicode (surely cause failures)\t2")


"""
! WARNING: ⚠️⚠️⚠️
! For some reason, this works in the integrated terminal, but not in the cmd.exe, and I don't know why.
! If you have the solution, please let me know.

If you want to customize your token, you can just add or remove an item in the list of characters below.
"""
# Character that will be used to generate the token
characters = ["a",
              "b",
              "c",
              "d",
              "e",
              "f",
              "g",
              "h",
              "i",
              "j", 
              "k",
              "l",
              "m",
              "n",
              "o",
              "p",
              "q",
              "r",
              "s",
              "t",
              "u",
              "v",
              "w",
              "x",
              "y",
              "z",
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H",
              "I",
              "J",
              "K",  
              "L",
              "M",
              "N",
              "O",
              "P",
              "Q",
              "R",
              "S",
              "T",
              "U",
              "V",
              "W",
              "X",
              "Y",
              "Z",
              "0",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "!",
              "@",
              "#",
              "$",
              "%",
              "^",
              "&",
              "*",
              "(",
              ")",
              "-",
              "_",
              "+",
              "=",
              "{",
              "[",
              "}",
              "]",
              ":",
              ";",
              "\"",
              "<",
              ",",
              ">",
              ".",
              "/",
              "?"]

# * Token formation ↓
mode = input("Mode?\n")

if int(mode) == 1:
    n = 0
    length = input("Length of the token?")
    loops = input("How many tokens?")
    while n < int(loops):
        output = ""
        i = 0
        for x in range(int(length)):
            r = random.randint(0, len(characters) - 1)
            output += characters[r]
        n += 1
        
        print(output)

if int(mode) == 2:
    length = input("Length:")
    n = 0
    i = 0
    
    output = ""
    while i < int(length):
        r = random.randint(0, 110000)
        
        try:
            chr(r)
            output += chr(r)
        except:
            pass
        
        i += 1       
    print(output)