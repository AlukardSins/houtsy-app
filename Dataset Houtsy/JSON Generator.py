# -*- coding: utf-8 -*-
'''
Created on Mon Jun 15 22:34:04 2020

@author: Alukard
'''

import random
import json

users = ['Alukard', 'JDRoldan', 'Zulu-bot']
services = ['Energy', 'Water', 'Gas']

for user in users:
  ''' Set median values for each service '''
  energyMedian = 10
  waterMedian = 50
  gasMedian = 30

  for service in services:
    ''' Open doc to write on '''
    docName = '{}-{}'.format(service, user)
    doc = open('{}.json'.format(docName), 'w')
    doc.write("[\n")

    ''' Determine tags for each data set '''
    # userId
    if user == users[0]:
      userTag = '5edd6f1023651b46d83a03c1'
    elif user == users[1]:
      userTag = '5edd6f6923651b46d83a03c2'
    elif user == users[2]:
      userTag = '5edd6fb123651b46d83a03c3'
    
    # Service tag
    if service == services[0]:
      serviceTag = 'E'
    elif service == services[1]:
      serviceTag = 'W'
    elif service == services[2]:
      serviceTag = 'G'

    # aptId / aptTag
    if user == users[0]:
      tower = 'A'
      aptTag = '101'
    elif user == users[1]:
      tower = 'B'
      aptTag = '101'
    elif user == users[2]:
      tower = 'C'
      aptTag = '101'

    ''' Generate random data '''
    for min in range(0,60,1):
        ''' Set values around the median for each service '''
        if service == services[0]:
          sendData = energyMedian + random.uniform(-2,2)
          while sendData < 0 or sendData > 100:
              if sendData < 0:
                  sendData += random.uniform(0,1)
              if sendData > 100:
                  sendData -= random.uniform(0,1)
          energyMedian = sendData
        elif service == services[1]:    
          sendData = waterMedian + random.uniform(-2,2)
          while sendData < 0 or sendData > 100:
              if sendData < 0:
                  sendData += random.uniform(0,1)
              if sendData > 100:
                  sendData -= random.uniform(0,1)
          waterMedian = sendData
        elif service == services[2]:
          sendData = gasMedian + random.uniform(-2,2)
          while sendData < 0 or sendData > 100:
              if sendData < 0:
                  sendData += random.uniform(0,1)
              if sendData > 100:
                  sendData -= random.uniform(0,1)
          gasMedian = sendData
          
        

        data = json.dumps(
                {'userId': '{}'.format(userTag),
                'sensorId': '{}-{}-{}'.format(serviceTag, tower, aptTag),
                'aptId': 'T{}-{}'.format(tower, aptTag),
                'type': '{}'.format(service),
                'dateTime': '2020-02-02T02:{:02d}:00'.format(min),
                'data': round(sendData, 4),
                'status': True
                })
        if min != 59:    
            doc.write("\t{},\n".format(data))
        else:
            doc.write("\t{}\n]".format(data))
    
    ''' Close doc '''
    doc.close()