from django.urls import path
from .views import *
from .views import log_hr
from .views import jobpost , getJobList
from django.urls import path, include
from .views import applicantsReq
from .views import getApplicants , upload_image

urlpatterns = [
     path("log_hr/", log_hr, name="log_hr"),
     path("apply_now/", applicantsReq, name="applicantsReq"),
     path("log_hr/postJob", jobpost, name="jobpost"),
     path("log_hr/jobPost", getJobList, name="getJobList"),
     path("log_hr/getCandidates", getApplicants, name="getApplicants"),
     path("getocr/", upload_image, name="upload_image"),
     path('password_reset/', include('django_rest_passwordreset.urls', namespace='password_reset')),
] 
