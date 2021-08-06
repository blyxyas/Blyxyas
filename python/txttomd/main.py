import json
path = "keywords.json"

"""
* WAIT: You can customize this
* The way you can customize this is executing the file 'customizer.py' in the terminal
* This file will ask you some questions, and will generate a new 'main.py' file with the right syntax,
* But you can also changes some things in keywords, replacements, breakword and breakrepl,
* To change your syntax, and you can even add some additional keywords, for things like bold italic, etc...

^ The way to customize is:
^ Write your shortcut / custom syntax in 'keywords' list (in keywords.json)
^ Then write the html syntax for the same shortcut in the 'replacements' list (in keywords.json)
^ Then write the shortcut / custom syntax for the break in 'breakword' list (in keywords.json)
^ Then write the html syntax for the break in 'breakrepl' list (in keywords.json)
"""

# Read the file and split the words
f = open("txt.txt", "r")

content = f.read()
words = content.split()

# Import the Keywords
data = json.load(open(path, "r", encoding="utf-8"))

keywords = data["keywords"]
replacements = data["replacements"]
breakwords = data["breakwords"]
breakrepl = data["breakrepl"]

listing = False

# Search if 'word' is in the list of keywords:
# If " then replace it with the replacement (same index)
f.close()
f = open("markdown.md", "w")

class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

def b(string):
    print(f"{bcolors.BOLD}{string}{bcolors.ENDC}")

# * Main Loop Core

for word in words:
    b("Variable Settled")
    if word.startswith("\\"):
        words[words.index(word)] = word[2:]
    
    if word in keywords:
        # print(f"words.index(word) = {words.index(word)} !! replacements.index = {keywords.index(word)}")
        words[words.index(word)] = replacements[keywords.index(word)]  
    if word in breakwords:
        # replace 'word' with the breakword in the breakrepl list
        words[words.index(word)] = breakrepl[breakwords.index(word)]
         
b("completo")
# * Ordered and unordered list
        
f.write(" ".join(words))

# (*≧︶≦)

print(f'{bcolors.OKGREEN}Text to Markdown Completed{bcolors.ENDC}')

# ^ {bcolors.ENDC} to END COLOR
