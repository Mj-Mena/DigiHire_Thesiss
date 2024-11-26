from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

from django.contrib.auth.base_user import BaseUserManager

class HrUserManager(BaseUserManager):
    def create_user(self, email, password=None, username=None):
        if not email:
            raise ValueError('An email is required.')
        if not password:
            raise ValueError('A password is required.')
        email = self.normalize_email(email)
        user = self.model(email=email, username=username)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password=None, username=None):
        if not email:
            raise ValueError('An email is required.')
        if not password:
            raise ValueError('A password is required.')
        user = self.create_user(email, password, username)
        user.is_superuser = True
        user.is_staff = True  # Superusers are usually staff as well
        user.save()
        return user


class Hruser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=50, unique=True)
    username = models.CharField(max_length=50) 
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    objects = HrUserManager()

    def __str__(self):
        return self.username

class Applicant(models.Model): 
    applicantID = models.AutoField( primary_key=True)
    fullname = models.CharField( max_length=50)
    emailAdd = models.EmailField( max_length=254)
    presentAddress = models.CharField(max_length=100)
    permaAddress = models.CharField(max_length=100) 
    mobileNum = models.IntegerField(max_length=12)
    landline = models.IntegerField(max_length=12)
    sex = models.CharField(max_length=10)
    birthdate = models.CharField()
    civilStatus = models.CharField(max_length=12)
    height = models.CharField(max_length=24)
    weight = models.CharField(max_length=24)
    birthplace = models.CharField(max_length=120)
    tin = models.IntegerField(max_length=24)
    philhealth = models.IntegerField(max_length=24)
    sss = models.IntegerField(max_length=24)
    pagibig = models.IntegerField(max_length=24)
    religion = models.CharField(max_length=100) 
    language = models.CharField(max_length=100) 
    promotions = models.CharField(max_length=100)
    referral = models.CharField(max_length=100)
    relationshipToReferral = models.CharField(max_length=100)
    language = models.CharField(max_length=100)
    Datebegin = models.DateField(max_length=100)
    salaryExpect = models.IntegerField(max_length=24)
    fathersName = models.CharField(max_length=100)
    mothersName = models.CharField(max_length=100)
    motherContact = models.IntegerField(max_length=24)
    fatherContact = models.IntegerField(max_length=24)
    famAddress = models.CharField(max_length=100)
    emergencyContactName = models.CharField(max_length=100)
    emergencyContactRelationship = models.CharField(max_length=100)
    emergencyContactOccupation = models.CharField(max_length=100)
    emergencyContactemail = models.EmailField( max_length=254)
    postSchoolName =models.CharField(max_length=100)
    postSchoollocation =models.CharField(max_length=100)
    postMajor =models.CharField(max_length=100)
    postGradDateStarted =models.CharField(max_length=100)
    postGradDateEnded =models.CharField(max_length=100)
    collegeSchoolName =models.CharField(max_length=100)
    collegeSchoollocation =models.CharField(max_length=100)
    collegeMajor =models.CharField(max_length=100)
    collegeGradDateStarted =models.CharField(max_length=100)
    collegeGradDateEnded =models.CharField(max_length=100)
    vocationalSchoolName =models.CharField(max_length=100)
    vocationalSchoollocation =models.CharField(max_length=100)
    vocationalMajor =models.CharField(max_length=100)
    vocationalGradDateStarted =models.CharField(max_length=100)
    vocationalGradDateEnded =models.CharField(max_length=100)
    secondarySchoolName =models.CharField(max_length=100)
    secondarySchoollocation =models.CharField(max_length=100)
    secondaryMajor =models.CharField(max_length=100)
    secondaryGradDateStarted =models.CharField(max_length=100)
    secondaryGradDateEnded =models.CharField(max_length=100)
    elemSchoolName =models.CharField(max_length=100)
    elemSchoollocation =models.CharField(max_length=100)
    elemMajor =models.CharField(max_length=100)
    elemGradDateStarted =models.CharField(max_length=100)
    elemGradDateEnded =models.CharField(max_length=100)
    driverLicense = models.IntegerField(max_length=100)
    organizationName = models.CharField(max_length=100)
    organizationAddress = models.CharField(max_length=100)
    organizationDateStarted = models.CharField(max_length=100)
    organizationDateEnded = models.CharField(max_length=100)
    reference1=models.CharField(max_length=100)
    reference1Address=models.CharField(max_length=100)
    reference1Cell=models.CharField(max_length=100)
    reference1Landline=models.CharField(max_length=100)
    reference1Relationship=models.CharField(max_length=100)
    reference1Occupation=models.CharField(max_length=100)
    reference2=models.CharField(max_length=100)
    reference2Address=models.CharField(max_length=100)
    reference2Cell=models.CharField(max_length=100)
    reference2Landline=models.CharField(max_length=100)
    reference2Relationship=models.CharField(max_length=100)
    reference2Occupation=models.CharField(max_length=100)
    reference3=models.CharField(max_length=100)
    reference3Address=models.CharField(max_length=100)
    reference3Cell=models.CharField(max_length=100)
    reference3Landline=models.CharField(max_length=100)
    reference3Relationship=models.CharField(max_length=100)
    reference3Occupation=models.CharField(max_length=100)
    referenceRelative=models.CharField(max_length=100)
    referenceRelativeAddress=models.CharField(max_length=100)
    referenceRelativeCell=models.CharField(max_length=100)
    referenceRelativeLandline=models.CharField(max_length=100)
    referenceRelativeRelationship=models.CharField(max_length=100)
    referenceRelativeOccupation=models.CharField(max_length=100)
    

class JobPosting(models.Model) : 
    JobTitle = models.CharField(max_length=100, primary_key=True)
    # ForeignKey with blank=True allows applicant to be optional
    applicant = models.ForeignKey(Applicant, on_delete=models.CASCADE, blank=True, null=True)
    department = models.CharField(max_length=100)
    neededDegree = models.CharField(max_length=100)
    neededExp = models.CharField(max_length=100)
    neededApplicant = models.IntegerField()  # IntegerField does not need max_length
    neededRole = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    jobLabel = models.CharField(max_length=100)
    createdBy = models.CharField(max_length=100, null=True, blank=True)
    