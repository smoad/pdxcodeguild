from django.shortcuts import render
from django.http import HttpResponse
import json

def index(request):
    return render(request, 'gameapp/index.html', {})


def savescore(request):
    data = json.loads(request.body)
    print(data)
    return HttpResponse('OK')

