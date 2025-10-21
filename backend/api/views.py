from rest_framework import viewsets
from .models import Post
from .serializers import PostSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all().order_by('-created_at')
    serializer_class = PostSerializer
    lookup_field = 'slug'

import requests
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import os

@csrf_exempt
def hardcover_proxy(request):
    if request.method == 'POST':
        api_key = os.getenv('HARDCOVER_API_KEY')  # Store this in your Django .env
        headers = {
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {api_key}',
        }
        response = requests.post(
            'https://api.hardcover.app/v1/graphql',
            headers=headers,
            data=request.body
        )
        return JsonResponse(response.json(), safe=False)