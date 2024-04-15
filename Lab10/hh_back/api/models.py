from django.db import models

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(default='')
    city = models.CharField(max_length=255)
    address = models.TextField(default='')
    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'

class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(default='')
    salary = models.FloatField(default=100000)
    company = models.ForeignKey(Company,on_delete=models.CASCADE,null=True)
    class Meta :
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'