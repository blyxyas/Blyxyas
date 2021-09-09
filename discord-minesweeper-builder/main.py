with open("input.txt", "r") as f:
    stdin = f.read()
    f.close()
def writing(message):
    with open("output.txt", "w") as f:
        f.write(message)
        f.close()

switch = {
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
    "b": "bomb",
    "\n": "\n"
}

appending = []
for arg in stdin:
    current = switch.get(str(arg), "ERROR, Invalid Character")
    if current == "\n":
        appending.append("\n")
    else:
        appending.append(f"||:{current}:||")

writing("".join(appending))