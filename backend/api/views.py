# views.py
from rest_framework import viewsets
from .models import Category, Product, Comment, ExpiryTracker
from .serializers import CategorySerializer, ProductSerializer, CommentSerializer, ExpiryTrackerSerializer
from rest_framework.permissions import IsAuthenticated


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
