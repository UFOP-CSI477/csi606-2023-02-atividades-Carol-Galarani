from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.hashers import check_password
from users.models import User
from .serializers import UserSignupSerializer, UserLoginSerializer


class UserSignupAPIView(APIView):
    def post(self, request):
        serializer = UserSignupSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            name = serializer.validated_data['name']
            password = serializer.validated_data['password']

            user = User.objects.create_user(email=email, name=name,
                                            password=password)
            refresh = RefreshToken.for_user(user)
            return Response({
                'status': 'success',
                'message': 'Usuário cadastrado com sucesso.',
                'user': {
                    'id': user.id,
                    'name': user.name
                },
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserLoginAPIView(APIView):
    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            try:
                user = User.objects.get(email=email)
            except User.DoesNotExist:
                return Response(
                    {'status': 'error', 'message': 'Credenciais inválidas.'},
                    status=status.HTTP_401_UNAUTHORIZED
                )
            if check_password(password, user.password):
                refresh = RefreshToken.for_user(user)
                return Response({
                    'status': 'success',
                    'message': 'Login bem-sucedido.',
                    'user': {
                        'id': user.id,
                        'name': user.name
                    },
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                }, status=status.HTTP_200_OK)
            else:
                return Response(
                    {'status': 'error', 'message': 'Credenciais inválidas.'},
                    status=status.HTTP_401_UNAUTHORIZED
                )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
