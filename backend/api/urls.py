# urls.py
from rest_framework import routers
from .views import CategoryViewSet, ProductViewSet, CommentViewSet, ExpiryTrackerViewSet

router = routers.DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'products', ProductViewSet)
router.register(r'comments', CommentViewSet)
router.register(r'expirytrackers', ExpiryTrackerViewSet)

urlpatterns = router.urls
