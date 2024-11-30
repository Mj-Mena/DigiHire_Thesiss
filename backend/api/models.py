from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.contrib.auth.base_user import BaseUserManager
from django_rest_passwordreset.signals import reset_password_token_created
from django.dispatch import receiver
from django.urls import reverse
from django.template.loader import render_to_string
from django.core.mail import EmailMultiAlternatives
from django.utils.html import strip_tags

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
    siblings1 = models.CharField(max_length=255, null=True, blank=True)
    siblings2 = models.CharField(max_length=255, null=True, blank=True)
    siblings3 = models.CharField(max_length=255, null=True, blank=True)
    siblings4 = models.CharField(max_length=255, null=True, blank=True)
    siblings5 = models.CharField(max_length=255, null=True, blank=True)
    siblings1Age = models.CharField(max_length=255, null=True, blank=True)
    siblings2Age = models.CharField(max_length=255, null=True, blank=True)
    siblings3Age = models.CharField(max_length=255, null=True, blank=True)
    siblings4Age = models.CharField(max_length=255, null=True, blank=True)
    siblings5Age = models.CharField(max_length=255, null=True, blank=True)
    siblings1Occupation = models.CharField(max_length=255, null=True, blank=True)
    siblings2Occupation = models.CharField(max_length=255, null=True, blank=True)
    siblings3Occupation = models.CharField(max_length=255, null=True, blank=True)
    siblings4Occupation = models.CharField(max_length=255, null=True, blank=True)
    siblings5Occupation = models.CharField(max_length=255, null=True, blank=True)
    siblings1Contact = models.CharField(max_length=255, null=True, blank=True)
    siblings2Contact = models.CharField(max_length=255, null=True, blank=True)
    siblings3Contact = models.CharField(max_length=255, null=True, blank=True)
    siblings4Contact = models.CharField(max_length=255, null=True, blank=True)
    siblings5Contact = models.CharField(max_length=255, null=True, blank=True)
    spousename = models.CharField(max_length=255, null=True, blank=True)
    spouseoccupation = models.CharField(max_length=255, null=True, blank=True)
    spousecontact = models.CharField(max_length=255, null=True, blank=True)
    spousenameemployer = models.CharField(max_length=255, null=True, blank=True)
    spouseaddress = models.CharField(max_length=255, null=True, blank=True)
    childnum = models.CharField(max_length=255, null=True, blank=True)
    childname1 = models.CharField(max_length=255, null=True, blank=True)
    childname2 = models.CharField(max_length=255, null=True, blank=True)
    childname3 = models.CharField(max_length=255, null=True, blank=True)
    childname4 = models.CharField(max_length=255, null=True, blank=True)
    childname5 = models.CharField(max_length=255, null=True, blank=True)
    childbirthdate1 = models.CharField(max_length=255, null=True, blank=True)
    childbirthdate2 = models.CharField(max_length=255, null=True, blank=True)
    childbirthdate3 = models.CharField(max_length=255, null=True, blank=True)
    childbirthdate4 = models.CharField(max_length=255, null=True, blank=True)
    childbirthdate5 = models.CharField(max_length=255, null=True, blank=True)
    childage1 = models.CharField(max_length=255, null=True, blank=True)
    childage2 = models.CharField(max_length=255, null=True, blank=True)
    childage3 = models.CharField(max_length=255, null=True, blank=True)
    childage4 = models.CharField(max_length=255, null=True, blank=True)
    childage5 = models.CharField(max_length=255, null=True, blank=True)
    emergencyContactName = models.CharField(max_length=100)
    emergencyContactRelationship = models.CharField(max_length=100)
    emergencyContactOccupation = models.CharField(max_length=100)
    emergencyContactemail = models.EmailField( max_length=254)
    postSchoolName =models.CharField(max_length=255, null=True, blank=True)
    postSchoollocation =models.CharField(max_length=255, null=True, blank=True)
    postMajor =models.CharField(max_length=255, null=True, blank=True)
    postGradDateStarted =models.CharField(max_length=255, null=True, blank=True)
    postGradDateEnded =models.CharField(max_length=255, null=True, blank=True)
    collegeSchoolName =models.CharField(max_length=255, null=True, blank=True)
    collegeSchoollocation =models.CharField(max_length=255, null=True, blank=True)
    collegeMajor =models.CharField(max_length=255, null=True, blank=True)
    collegeGradDateStarted =models.CharField(max_length=255, null=True, blank=True)
    collegeGradDateEnded =models.CharField(max_length=255, null=True, blank=True)
    vocationalSchoolName =models.CharField(max_length=255, null=True, blank=True)
    vocationalSchoollocation =models.CharField(max_length=255, null=True, blank=True)
    vocationalMajor =models.CharField(max_length=255, null=True, blank=True)
    vocationalGradDateStarted =models.CharField(max_length=255, null=True, blank=True)
    vocationalGradDateEnded =models.CharField(max_length=255, null=True, blank=True)
    secondarySchoolName =models.CharField(max_length=255, null=True, blank=True)
    secondarySchoollocation =models.CharField(max_length=255, null=True, blank=True)
    secondaryMajor =models.CharField(max_length=255, null=True, blank=True)
    secondaryGradDateStarted =models.CharField(max_length=255, null=True, blank=True)
    secondaryGradDateEnded =models.CharField(max_length=255, null=True, blank=True)
    elemSchoolName =models.CharField(max_length=255, null=True, blank=True)
    elemSchoollocation =models.CharField(max_length=255, null=True, blank=True)
    elemMajor =models.CharField(max_length=255, null=True, blank=True)
    elemGradDateStarted =models.CharField(max_length=255, null=True, blank=True)
    elemGradDateEnded =models.CharField(max_length=255, null=True, blank=True)
    driverLicense = models.IntegerField(max_length=255, null=True, blank=True)
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
    
@receiver(reset_password_token_created)
def password_reset_token_created(reset_password_token , *args, **kwargs) : 
    sitelink = "http://localhost:5173/"
    token = "{}".format(reset_password_token.key)
    full_link = str(sitelink ) + str("password-reset/") + str(token)
    print(full_link)
    context = {
        'full_link':full_link , 
        "email_address" : reset_password_token.user.email
    }
    html_message = render_to_string("backend/email.html" , context=context)
    plain_message = strip_tags(html_message)
    msg = EmailMultiAlternatives (
        subject= "Request for resetting password for {title}".format(title = reset_password_token.user.email),
        body=plain_message,
        from_email="kalsnipe6@gmail.com",
        to=[reset_password_token.user.email]
    )
    msg.attach_alternative(html_message, "text/html")
    msg.send()