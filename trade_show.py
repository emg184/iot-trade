import time
import os
import RPi.GPIO as GPIO
import requests
import json
import Adafruit_ADS1x15

adc = Adafruit_ADS1x15.ADS1015()
adc2 = Adafruit_ADS1x15.ADS1015(address=0x49)

GPIO.setup(0, GPIO.IN)
input = GPIO.input(0)

valve1 = []
valve2 = []
valve1Object = {}
valve2Object = {}
stateChange = True
valveCounter = 0

pump1Object = {}
pump2Object = {}
valveCycle = 0

key = '76fa2257-cd08-4693-b61f-6f882f1d222e'
base_url = 'https://pp-1807091822o7.portal.ptc.io/Thingworx/Things/Pump_0001/Properties/*?appKey='

while True:
    input = GPIO.input(0)
    if input == 1 and stateChange == True:
        if valveCounter == 0:
            print("We're here 1")
            #valve1Object['activated'] = readAdc2(0)
            stateChange = false
            valveCounter += 1
        if valveCounter == 2:
            print("We're here 2")
            #valve2Object['activated'] = readAdc(1)
            stateChange = false
            valveCounter += 1
    elif input == 0 and stateChange == False:
        if valveCounter == 1:
            valveCycle += 1
            print("We're here 3")
            valve1Object['deactivated'] = readAdc2(3) * .002
            stateChange = true
            valveCounter +=
        if valveCounter == 3:
            valveCycle += 1
            print("We're here 4")
            valve2Object['deactivated'] = readAdc2(4) * .002
            stateChange = true
            if valveCycle % 4 == 0:
                readPump()
                sendData()
            valveCounter = 0

def readPump():
    pump1Object['level1'] = readAdc(1)
    pump1Object['level2'] = readAdc(2)
    pump1Object['level3'] = readAdc(3)
    pump2Object['level1'] = readAdc(4)
    pump2Object['level2'] = readAdc2(1)
    pump2Object['level3'] = readAdc2(2)

def readAdc(channel):
    average = 0
    numSamples = 20
    j = 0
    GAIN = 1
    adc.start_adc(channel, gain=GAIN)
    while(j < 1):
        average += adc.get_last_result()
        j++
    average /= numSamples
    adc.stop_adc()
    return average

def readAdc2(channel):
    average = 0
    numSamples = 20
    j = 0
    GAIN = 1
    adc.start_adc(channel, gain=GAIN)
    while(j < 1):
        average += adc.get_last_result()
        j++
    average /= numSamples
    adc.stop_adc()
    return average

def sendData():
    print("valve 1:" + str(valve1Object['deactivated']))
    print("valve 2:" + str(valve2Object['deactivated']))
    print("pump1:" + str(pump1Object['level1']))
    print("pump1:" + str(pump1Object['level2']))
    print("pump1:" + str(pump1Object['level3']))
    print("pump1:" + str(pump2Object['level1']))
    print("pump1:" + str(pump2Object['level2']))
    print("pump1:" + str(pump2Object['level3']))

def createJson(valve1, valve2, pump1, pump2):
    pass
