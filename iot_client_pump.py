import requests
import json
import random
import time

pump = []
for i in range(0,5):
    pumpData = {}
    pumpData["level"] = 1
    pumpData["value"] = random.random()
    pumpData['device_id'] = 2
    pump.append(pumpData)


for i in range(0,5):
    pumpData = {}
    pumpData["level"] = 2
    pumpData["value"] = random.random() * 2
    pumpData['device_id'] = 2
    pump.append(pumpData)

for i in range(0,5):
    pumpData = {}
    pumpData["level"] = 3
    pumpData["value"] = random.random() * 4
    pumpData['device_id'] = 2
    pump.append(pumpData)

newData = json.dumps(pump)
for i in range(1, 10):
    r = requests.post('http://localhost:8081/pump', data = { 'pumps': newData })
    time.sleep(1)
