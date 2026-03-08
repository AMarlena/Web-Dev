# models.py

class Product:
    """
    Base class representing a generic product.
    """

    def __init__(self, name: str, price: float, quantity: int):
        self.name = name
        self.price = price
        self.quantity = quantity

    def get_total_value(self) -> float:
        """
        Returns total value of product in stock.
        """
        return self.price * self.quantity

    def describe(self) -> str:
        """
        Returns basic product description.
        """
        return f"{self.name} costs ${self.price}"

    def __str__(self) -> str:
        return f"Product(name={self.name}, price={self.price}, quantity={self.quantity})"


class Electronic(Product):
    """
    Child class representing electronic products.
    """

    def __init__(self, name: str, price: float, quantity: int, brand: str, warranty_years: int):
        super().__init__(name, price, quantity)
        self.brand = brand
        self.warranty_years = warranty_years

    def describe(self) -> str:
        """
        Overridden method demonstrating polymorphism.
        """
        return f"{self.brand} {self.name} with {self.warranty_years}-year warranty costs ${self.price}"

    def power_on(self) -> str:
        return f"{self.name} is now powered on."


class Clothing(Product):
    """
    Child class representing clothing products.
    """

    def __init__(self, name: str, price: float, quantity: int, size: str, material: str):
        super().__init__(name, price, quantity)
        self.size = size
        self.material = material

    def describe(self) -> str:
        """
        Overridden method demonstrating polymorphism.
        """
        return f"{self.name} made of {self.material} (Size: {self.size}) costs ${self.price}"

    def try_on(self) -> str:
        return f"You are trying on the {self.name}."