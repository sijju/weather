from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view

import requests
import json




@api_view(['GET', 'POST'])
def getData(request):
   response = {}
   if request.method == 'POST': 
    api_key = "efb6359c8cf24ad0a3263502230605"
    city = request.data.get('city')
    lat = request.data.get('lat')
    long = request.data.get('long')

    

    if city:
        url = f'https://api.weatherapi.com/v1/current.json?key={api_key}&q={city}'
        res = requests.get(url)
        
        data = res.json()
        
        response['status'] = 200
        response['message'] = 'success'
        response['data'] = data
    elif lat and long :
       url = f'https://api.weatherapi.com/v1/current.json?key={api_key}&q={lat}&q={long}'    
       res = requests.get(url)
       data = res.json()
       response['status'] =200
       response['message'] = 'success'
       response['data'] = data
    else : 
        response['message']="error"
        response['data'] ={}    
 
   return Response(response)

    
