import json
data = []

isRoot = {}
isLeave = {}

have = []

nodeId = {}
with open("output.txt", "r") as file:

    line = file.readline().rstrip()
    for x in line.split('^'):
        isRoot[x] = True
    line = file.readline().rstrip()
    for x in line.split('^'):
        isLeave[x] = True

    for line in file.readlines():

        line = line.rstrip()
        if line.count('=') > 0:
            name, nid = line.split('=')
            nodeId[name] = nid

        elif line.count('!') > 0:
            x, y = line.split('!')
            # print(x, y)x

            if ('e' + nodeId[x] + '-' + nodeId[y]) not in have:
                have.append(('e' + nodeId[x] + '-'+nodeId[y]))
                print(('e' + nodeId[x] + '-' + nodeId[y]))
                data.append({
                    'id': 'e' + nodeId[x] + '-'+nodeId[y],
                    'source': nodeId[x],
                    'target': nodeId[y],
                    'type': 'smoothstep',
                    'animated': False,
                    'style': {'stroke': '#000000'},
                    'arrowHeadType': 'ArrowHeadType.ArrowClosed',
                })
        elif line.count("@") > 0:
            # print(line)
            name, pos = line.split("@")
            x, y = pos.split(",")
            x = int(x)
            y = int(y)

            if nodeId[name] not in have:
                have.append(nodeId[name])
                nodeData = {
                    'id': nodeId[name],
                    'data': {'label': name},
                    'position': {'x': x, 'y': y},
                }
                if isRoot.get(name) == True:
                    nodeData['type'] = 'input'
                elif isLeave.get(name) == True:
                    nodeData['type'] = 'output'
                data.append(nodeData)
        else:
            print("ERROR!")
            print(line)

jsonString = json.dumps(data)
jsonFile = open("data.json", "w")
jsonFile.write(jsonString)
jsonFile.close()
