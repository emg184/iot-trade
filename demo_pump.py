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

key = '76fa2257-cd08-4693-b61f-6f882f1d222e'
base_url = 'https://pp-1807091822o7.portal.ptc.io/Thingworx/Things/Pump_0001/Properties/*?appKey='
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
