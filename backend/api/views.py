from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from rest_framework import status
from .serializer import Hrserializer, JobPostingSerializer, ApplicationSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from .models import JobPosting, Applicant
from PIL import Image
import pytesseract
import logging
@api_view(['POST'])
def log_hr(request):
    data = request.data
    serializer = Hrserializer(data=data)

    # Check if the serializer data is valid
    if serializer.is_valid():
        email = serializer.validated_data['email']
        password = serializer.validated_data['password']

        try:
            # Retrieve the user by email
            user = get_user_model().objects.get(email=email)

            # Check if the password is correct
            if user.check_password(password):
                refresh = RefreshToken.for_user(user)
                access_token = str(refresh.access_token)
                return Response({
                    'email' : email,
                'message': 'Login successful',
                'access': access_token,
                'refresh': str(refresh),  # Optionally return the refresh token
            }, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Invalid password'}, status=status.HTTP_401_UNAUTHORIZED)

        except get_user_model().DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
    else:
        # Return errors if serializer validation failsv
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['POST'])
def jobpost(request):
    data = request.data 
    serializer = JobPostingSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response({
            
            'message': 'Job Posting created successfully',
        }, status=status.HTTP_201_CREATED)
    else:
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['POST'])
def applicantsReq(request):
    import logging
    logger = logging.getLogger(__name__)
    try:
        # Existing logic
        data = request.data
        serializer = ApplicationSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        logger.error(f"Error: {e}")
        return Response({"detail": "Internal server error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
def getJobList(request):
    jobslist = JobPosting.objects.all()
    serializedData = JobPostingSerializer(jobslist , many = True).data
    return Response(serializedData)

@api_view(['GET'])
def getApplicants(request):
    applicant = Applicant.objects.all()
    serializedData = ApplicationSerializer(applicant , many = True).data
    return Response(serializedData)

@api_view(['POST'])
def upload_image(request):
    print(request.FILES)
    return Response(request.FILES)

    