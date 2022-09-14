from django.shortcuts import render
from BookApp import serialize
from BookApp.models import DetailsBook
from BookApp.serialize import DetailsSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.


class DetailsTable(APIView):
    def get(self, request):
        detailsObj = DetailsBook.objects.all()
        dlSerializeObj = DetailsSerializer(detailsObj, many=True)
        return Response(dlSerializeObj.data)

    def post(self, request):
        serializeObj = DetailsSerializer(data=request.data)
        if serializeObj.is_valid():
            serializeObj.save()
            return Response("Data Is Successfully stored into the table", 200)
        return Response(serializeObj.errors)


class DetailsUpdate(APIView):
    def post(self, request, pk):
        try:
            detailObj = DetailsBook.objects.get(pk=pk)
        except:
            return Response("Not Found in DataBase")
        serializeObj = DetailsSerializer(detailObj, data=request.data)
        if serializeObj.is_valid():
            serializeObj.save()
            return Response(200)
        return Response(serializeObj.errors)


class DetailsDelete(APIView):
    def post(self, request, pk):
        try:
            detailObj = DetailsBook.objects.get(pk=pk)
        except:
            return Response("Not Found in DataBase")
        detailObj.delete()
        return Response(200)
