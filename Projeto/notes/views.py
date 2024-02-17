from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Notas
from .serializers import NoteSerializer
from django.http import Http404


class NotasListCreateAPIView(APIView):
    def get(self, request, user_id):
        notas = Notas.objects.filter(user_id=user_id)
        serializer = NoteSerializer(notas, many=True)
        return Response(serializer.data)

    def post(self, request, user_id):
        serializer = NoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user_id=user_id)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class NotasRetrieveUpdateDestroyAPIView(APIView):
    def get_object(self, pk):
        try:
            return Notas.objects.get(pk=pk)
        except Notas.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        nota = self.get_object(pk)
        serializer = NoteSerializer(nota)
        return Response(serializer.data)

    def put(self, request, pk):
        nota = self.get_object(pk)
        serializer = NoteSerializer(nota, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        nota = self.get_object(pk)
        nota.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
