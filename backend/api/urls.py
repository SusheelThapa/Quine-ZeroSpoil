# urls.py
from rest_framework import routers
from .views import CategoryViewSet, ProductViewSet

router = routers.DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'products', ProductViewSet)

urlpatterns = router.urls
