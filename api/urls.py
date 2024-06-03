# from rest_framework.routers import DefaultRouter
# from .views import *
# from django.urls import path,include

# router = DefaultRouter()
# router.register(r"users", UserViewSet)

# urlpatterns = [
#     path("", include(router.urls)),
#     path("register/", UserCreate.as_view(), name="register"),
#    ]

from django.urls import path
from . import views

urlpatterns = [ 
    path("login/", views.login_view, name="api_login"),
    path("logout/", views.logout_view, name="api_logout"),
    path("session/", views.session_view, name="api_session"),
    path("whoami/", views.whoami_view, name="api_whoami"),
    path("register/", views.register_view, name="api_register"),
   
]
