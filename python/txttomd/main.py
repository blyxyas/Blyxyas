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
globalwords = data["globalwords"]
grepl = data["grepl"]

listcheck = False

# Search if 'word' is in the list of keywords:
# If " then replace it with the replacement (same index)
f.close()
f = open("markdown.md", "w")
for word in words:

    if listcheck == True:
        print("oh hi")
        words[words.index(word)] = "<li>" + word
    if listcheck == False:
        word = word

    if word.startswith("\\"):
        continue

    if word in keywords:
        # print(f"words.index(word) = {words.index(word)} !! replacements.index = {keywords.index(word)}")
        words[words.index(word)] = replacements[keywords.index(word)]

    elif word in breakwords:
        # replace 'word' with the breakword in the breakrepl list
        words[words.index(word)] = breakrepl[breakwords.index(word)]

    elif word in globalwords:
        words[words.index(word)] = grepl[globalwords.index(word)]

        # * Ordered and unordered lists

    if word == "ol" or word == "ul":
        listcheck = True
    elif word == ";ol": 
        print("hi")

f.write(" ".join(words))

# (*≧︶≦)


def colored(r, g, b, text):
    return "\033[38;2;{};{};{}m{} \033[38;2;255;255;255m".format(r, g, b, text)


print(colored(66, 245, 111, 'Text to Markdown Completed'))
