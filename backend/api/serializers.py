# serializers.py
from rest_framework import serializers
from .models import Category, Product, Comment, ExpiryTracker

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'


class ExpiryTrackerSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExpiryTracker
        fields = '__all__'
