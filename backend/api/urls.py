# urls.py
from rest_framework import routers
from .views import CategoryViewSet, ProductViewSet, CommentViewSet

router = routers.DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'products', ProductViewSet)
router.register(r'comments', CommentViewSet)

urlpatterns = router.urls
