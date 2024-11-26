from django.urls import path
from .views import *
from .views import log_hr
from .views import jobpost , getJobList
urlpatterns = [
     path("log_hr/", log_hr, name="log_hr"),
     path("log_hr/postJob", jobpost, name="jobpost"),
     path("log_hr/jobPost", getJobList, name="getJobList"),
] 
