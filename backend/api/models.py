# models.py
from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.PositiveIntegerField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comment {self.id} by {self.user.username} at {self.created_at}"


class ExpiryTracker(models.Model):
    product_name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    expiry_date = models.DateField()
    purchase_date = models.DateField()
    quantity = models.PositiveIntegerField(default=1)
    notes = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.product_name} - Expires on {self.expiry_date}"

class DonateFood(models.Model):
    fullName = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    pickupDate = models.DateField()
    address = models.TextField()
    termsChecked = models.BooleanField(default=False)  # Add this line

    def __str__(self):
        return self.email
