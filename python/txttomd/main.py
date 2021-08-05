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

# Search if 'word' is in the list of keywords:
# If " then replace it with the replacement (same index)
f.close()
f = open("markdown.md", "w")
for word in words:

    if word.startswith("\\"):
        continue

    if word in keywords:
        words[words.index(word)] = replacements[keywords.index(word)]
    if word in breakwords:
        # replace 'word' with the replace in the breakword list
        words[words.index(word)] = breakrepl[breakwords.index(word)]

f.write(" ".join(words))
