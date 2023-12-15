from django.shortcuts import render
from rest_framework.views import APIView


class WordBank(APIView):
    pass
    # def get(self, request):
    #     words = Cart_item.objects.all()
    #     ser_cart_items = CartItemSerializer(cart_items, many=True)
    #     total_price=0
    #     for cart_item in cart_items: 
    #         price=cart_item.item.price
    #         quantity = cart_item.quantity
    #         if quantity is not None:
    #             total_price += price * quantity
    #     cart_dict = {'cart_items': sorted(ser_cart_items.data, key=lambda k: k['id']), 'total_price': total_price}
    #     print(cart_dict)
    #     return Response(cart_dict, status=HTTP_200_OK)