import graphene
from graphene_django import DjangoObjectType

from .models import Item


class ItemType(DjangoObjectType):
    class Meta:
        model = Item


class Query(graphene.ObjectType):
    items = graphene.List(ItemType)

    @staticmethod
    def resolve_items(self, info, **kwargs):
        return Item.objects.all()


class CreateItem(graphene.Mutation):
    id = graphene.Int(required=True)
    title = graphene.String(required=True)
    description = graphene.String(required=True)
    image = graphene.String()
    large_image = graphene.String()
    price = graphene.Int(required=True)

    class Arguments:
        title = graphene.String(required=True)
        description = graphene.String(required=True)
        image = graphene.String()
        large_image = graphene.String()
        price = graphene.Int(required=True)

    @staticmethod
    def mutate(self, info, title, description, price, image="", large_image=""):
        item = Item(
            title=title,
            description=description,
            image=image,
            large_image=large_image,
            price=price
        )
        item.save()

        return CreateItem(
            id=item.id,
            title=item.title,
            description=item.description,
            image=item.image,
            large_image=item.large_image,
            price=item.price,
        )


class Mutation(graphene.ObjectType):
    create_item = CreateItem.Field()
