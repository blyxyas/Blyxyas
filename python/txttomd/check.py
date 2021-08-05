import json
data = json.load(open("json.json", "r", encoding="utf-8"))
print(data["Hi"])