import os
from django.core.wsgi import get_wsgi_application

# Change this to your actual Django project name
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Digihire.settings')

application = get_wsgi_application()
