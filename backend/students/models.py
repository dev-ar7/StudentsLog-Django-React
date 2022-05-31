from django.db import models


class Student(models.Model):

    name = models.CharField('Name', max_length=245)
    email = models.EmailField()
    document = models.CharField('Document', max_length=25)
    phone = models.CharField(max_length=20)
    registrationDate = models.DateField('Registration Date', auto_now_add=True)

    def __str__(self):
        return self.name
