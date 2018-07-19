import time
import requests
import json
import random
import http.client as http_client

http_client.HTTPConnection.debuglevel = 1
import logging
import sys

logging.basicConfig()
logging.getLogger().setLevel(logging.DEBUG)
requests_log = logging.getLogger("requests.packages.urllib3")
requests_log.setLevel(logging.DEBUG)
requests_log.propagate = True

key = '83e44c91-f1e5-4018-bc39-6e8cf3710350'
base_url = 'https://bio-chem-dev-twx.es.thingworx.com/Thingworx/Things/Pump1/Properties/*?appKey='
app_url = base_url + key
headers = { 'Content-Type': 'application/json', 'appKey': key }

pump1Object = {}
payload = {'Level1': 7.00, 'Level2': 8.00, 'Level3': 9.00, 'PumpThreshold': 10.00}
response = requests.put(app_url, headers=headers, json=payload, verify=False)


while 1:
    pump1Object["Level1"] = float(str(round(random.random() * 1, 2)))
    pump1Object["Level2"] = float(str(round(random.random() * 2, 2)))
    pump1Object["Level3"] = float(str(round(random.random() * 4, 2)))
    pump1Object["PumpThreshold"] = float(8)
    r = requests.put(app_url, headers=headers, json=pump1Object, verify=False)
    time.sleep(15)
