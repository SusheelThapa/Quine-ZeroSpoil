# serializers.py
from rest_framework import serializers
from .models import Category, Product, Comment, ExpiryTracker, DonateFood

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

class DonateFoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = DonateFood
        fields = '__all__'
