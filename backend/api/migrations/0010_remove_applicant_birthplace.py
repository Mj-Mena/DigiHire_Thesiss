# Generated by Django 5.1.3 on 2024-12-01 15:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_rename_organizationaddress_applicant_nationality_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='applicant',
            name='birthplace',
        ),
    ]
