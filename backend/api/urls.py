# urls.py
from rest_framework import routers
from .views import CategoryViewSet, ProductViewSet, CommentViewSet, ExpiryTrackerViewSet, donate_form, contact_form, get_recipe, newsletter
from django.urls import path

router = routers.DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'products', ProductViewSet)
router.register(r'comments', CommentViewSet)
router.register(r'expirytrackers', ExpiryTrackerViewSet)

urlpatterns = [
    path('donate_form/', donate_form, name='donate_form'),
    path('contact_form/', contact_form, name='contact_form'),
    path('get_recipe/', get_recipe, name='get_recipe'),
    path('newsletter/', newsletter, name='newsletter'),
] + router.urls
