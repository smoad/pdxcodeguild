from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from . models import HighScore
import json

def index(request):
    return render(request, 'gameapp/index.html', {})

def getscore(request):
    scores = HighScore.objects.all().order_by('-score')[:10]
    data_dict = {'usernames': [], 'scores': []}
    for score in scores:
        data_dict['usernames'].append(score.username)
        data_dict['scores'].append(score.score)
    print(data_dict)
    return JsonResponse(data_dict)


def savescore(request):
    data = json.loads(request.body)
    userinfo = HighScore(username=data['username'], score=data['score'])
    userinfo.save()
    return HttpResponse('OK')

