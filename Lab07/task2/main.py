# main.py

from models import Product, Electronic, Clothing


def main():
    # Creating objects
    laptop = Electronic("Laptop", 1200.0, 5, "Dell", 2)
    smartphone = Electronic("Smartphone", 800.0, 10, "Samsung", 1)
    tshirt = Clothing("T-Shirt", 25.0, 50, "M", "Cotton")

    # Store in a list
    products = [laptop, smartphone, tshirt]

    # Iterate and demonstrate polymorphism
    for product in products:
        print(product)  # __str__
        print(product.describe())  # Polymorphism
        print("Total stock value:", product.get_total_value())
        print("-" * 40)

    # Calling unique methods
    print(laptop.power_on())
    print(tshirt.try_on())


if __name__ == "__main__":
    main()