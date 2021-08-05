"""
* WAIT: You can customize this
* The way you can customize this is executing the file 'customizer.py' in the terminal
* This file will ask you some questions, and will generate a new 'main.py' file with the right syntax,
* But you can also changes some things in keywords, replacements, breakword and breakrepl,
* To change your syntax, and you can even add some additional keywords, for things like bold italic, etc...
"""

# Read the file and split the words
f = open("txt.txt", "r")

content = f.read()
words = content.split()

print(f"words = {words}")

keywords = ["t1", "t2", "t3", "t4", "t5", "t6", "cc", "bb", "ii", "bcq"]

replacements = ["<h1>", "<h2>", "<h3>", "<h4>", "<h5>",
                "<h6>", "<code>", "<b>", "<i>", "<blockquote>"]

breakwords = [";t1", ";t2", ";t3", ";t4",
              ";t5", ";t6", ";cc", ";bb", ";ii", ";bcq"]

breakrepl = ["</h1>", "</h2>", "</h3>", "</h4>",
             "</h5>", "</h6>", "</code>", "</b>", "</i>", "</blockquote>"]
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
print(words)
