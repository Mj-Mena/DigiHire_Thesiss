from rest_framework import serializers
from .models import Hruser , Applicant , JobPosting

class Hrserializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(write_only=True, required=True)

class JobPostingSerializer(serializers.ModelSerializer):
    # Correctly define the ForeignKey field
    applicant = serializers.PrimaryKeyRelatedField(queryset=Applicant.objects.all(), required=False)
    JobTitle = serializers.CharField(required=True)
    department = serializers.CharField(required=True)
    location = serializers.CharField(required=True)
    employmentTime = serializers.CharField(required=True)
    neededDegree = serializers.CharField(required=True)
    neededApplicant = serializers.IntegerField(required=True)
    jobdescription = serializers.CharField(required = True)
    status = serializers.CharField(required=True)
    createdBy = serializers.CharField(required=False)

    class Meta:
        model = JobPosting
        fields = '__all__'

class ApplicationSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Applicant
        fields = "__all__"