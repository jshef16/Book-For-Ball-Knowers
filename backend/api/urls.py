from django.urls import path, include
from .views import hardcover_proxy
from rest_framework.routers import DefaultRouter
from .views import PostViewSet

router = DefaultRouter()
router.register(r'posts', PostViewSet)

urlpatterns = [
    path('proxy/hardcover/', hardcover_proxy),  # This line is key
    path('', include(router.urls)),
]