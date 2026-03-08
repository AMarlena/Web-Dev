# 1. Hello World
print("Hello, World!")

# 2. Arithmetic Operators
a = int(input())
b = int(input())
print(a + b)
print(a - b)
print(a * b)

# 3. Division
print(a // b)
print(a / b)

# 4. Loops
n = int(input())
for i in range(n):
    print(i * i)

# 5. List Comprehension
x = int(input())
y = int(input())
z = int(input())
n = int(input())
print([[i, j, k] for i in range(x+1)
                    for j in range(y+1)
                    for k in range(z+1)
                    if i + j + k != n])