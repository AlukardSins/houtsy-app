# -*- coding: utf-8 -*-
'''
Created on Mon Jun 15 22:34:04 2020

@author: Alukard
'''

import random
import json

doc = open("Gas-Alukard.json", "w")
doc.write("[\n")

for min in range(0,60,1):
    data = json.dumps(
            {'userId': '5edd6f1023651b46d83a03c1',
             'sensorId': 'G-TA-101',
             'aptId': 'TA-101',
             'type': 'Gas',
             'dateTime': '2020-06-15T22:{:02d}:00'.format(min),
             'data': round(random.uniform(0,100), 4),
             'status': True
             })
    if min != 59:    
        doc.write("\t{},\n".format(data))
    else:
        doc.write("\t{}\n]".format(data))
    
doc.close()