import json

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

path = "config.json"

"""
* WAIT: You can customize this
TODO auto customizer (probably never)

^ The way to customize is:
^ Write your shortcut / custom syntax in 'keywords'
^ Then write the html syntax for the same shortcut in the 'replacements'
^ Then write the shortcut / custom syntax for the break in 'breakword'
^ Then write the html syntax for the break in 'breakrepl' list
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

# * Globals

globalwords = data["globalwords"]
grepl = data["grepl"]

# Search if 'word' is in the list of keywords:
# If " then replace it with the replacement (same index)
f.close()
f = open("markdown.md", "w")

# * Main Loop Core

for word in words:
    if word.startswith("\\"):
        words[words.index(word)] = word[2:]
        continue

    if word in keywords:
        # print(f"words.index(word) = {words.index(word)} !! replacements.index = {keywords.index(word)}")
        words[words.index(word)] = replacements[keywords.index(word)]
    if word in breakwords:
        # replace 'word' with the breakword in the breakrepl list
        words[words.index(word)] = breakrepl[breakwords.index(word)]

    if word in globalwords:
        words[words.index(word)] = grepl[globalwords.index(word)]

# * Ordered and unordered list

f.write(" ".join(words))

# (*≧︶≦)

print(f'{bcolors.OKGREEN}Text to Markdown Completed{bcolors.ENDC}')
