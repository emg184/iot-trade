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

while True:
    input = GPIO.input(0)
    if input == 1 and stateChange == True:
        if valveCounter = 0:
            valve1Object['activated'] = readAdc(0)
            stateChange = false
            valveCounter++
        if valveCounter = 2:
            valve2Object['activated'] = readAdc(1)
            stateChange = false
            valveCounter++
    elif input == 0 and stateChange = False:
        if valveCounter = 1:
            valve1Object['deactivated'] = readAdc(0)
            stateChange = true
            valveCounter++
        if valveCounter = 3:
            valve2Object['deactivated'] = readAdc(1)
            stateChange = true
            valveCounter = 0

def readPump():
    pump1Object['level1'] = readAdc(2)
    pump1Object['level2'] = readAdc(3)
    pump1Object['level3'] = readAdc2(0)
    pump2Object['level1'] = readAdc2(1)
    pump2Object['level2'] = readAdc2(2)
    pump2Object['level3'] = readAdc2(3)

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

def sendData(httpBody):
    pass

def createJson(valve1, valve2, pump1, pump2):
    pass
