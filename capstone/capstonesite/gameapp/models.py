from django.db import models

class HighScore(models.Model):
    username = models.CharField(max_length=200)
    score = models.IntegerField()

    def __str__(self):
        return self.username