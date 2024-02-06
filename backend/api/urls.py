# urls.py
from rest_framework import routers
from .views import CategoryViewSet, ProductViewSet, CommentViewSet, ExpiryTrackerViewSet, submit_contact_form, contact_form
from django.urls import path

router = routers.DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'products', ProductViewSet)
router.register(r'comments', CommentViewSet)
router.register(r'expirytrackers', ExpiryTrackerViewSet)

urlpatterns = [
    path('submit_contact_form/', submit_contact_form, name='submit_contact_form'),
    path('contact_form/', contact_form, name='contact_form'),
] + router.urls
