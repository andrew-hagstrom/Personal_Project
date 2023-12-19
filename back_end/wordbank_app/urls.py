from django.urls import path
from .views import WBInfo

urlpatterns = [
    path('', WBInfo.as_view(), name='wordbank info')
    # path('<int:id>/', WB.as_view(), name='wordbank'),
]
