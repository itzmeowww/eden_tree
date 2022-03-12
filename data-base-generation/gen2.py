import json
data = {}
# Opening JSON file
with open('tree.json') as json_file:
    data = json.load(json_file)

    # Print the type of data variable


def dfs(name):
    # print(data[name][0])
    # print(name)
    if len(data[name]) >= 2:
        for x in data[name][1]:
            print("g[\"" + name + "\"].push_back(\"" + x + "\");")
            dfs(x)


dfs('Introduction to algebra')
