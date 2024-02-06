# views.py
from rest_framework import viewsets
from .models import Category, Product, Comment, ExpiryTracker
from .serializers import CategorySerializer, ProductSerializer, CommentSerializer, ExpiryTrackerSerializer, DonateFoodSerializer
from rest_framework.permissions import IsAuthenticated

from django.core.mail import send_mail
from django.http import JsonResponse
from backend.settings import EMAIL_HOST_USER
from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ExpiryTrackerViewSet(viewsets.ModelViewSet):
    queryset = ExpiryTracker.objects.all()
    serializer_class = ExpiryTrackerSerializer


@api_view(['POST'])
def submit_contact_form(request):
    serializer = DonateFoodSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

        user_data = serializer.validated_data


        # Constructing the email message with HTML content
        email_subject = 'Confirmation of Your Food Donation Form Submission - ZeroSpoil'

        # Render HTML content with image
        html_content = render_to_string('email_template.html', {'user_data': user_data})
        text_content = strip_tags(html_content)

        # Sending the email with both HTML and plain text content
        email = EmailMultiAlternatives(
            email_subject,
            text_content,
            EMAIL_HOST_USER,  # Replace with the sender's email address
            [user_data["email"]]  # Replace with the recipient's email address
        )
        email.attach_alternative(html_content, "text/html")
        email.send(fail_silently=False)

        return JsonResponse({'status': 'success', 'message': 'Form submitted successfully'})
    else:
        print("serializer not valid ")
        return Response(serializer.errors, status=400)


