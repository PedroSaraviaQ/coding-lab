
# * Examples and methods
fruits = ["apple", "banana", "watermelon", "orange"]
print(*fruits)


# * "append" adds directly at the end
fruits.append("peach")
print(*fruits)

fruits.insert(2, ["coco"])
print(*fruits)

fruits.extend(["pear", "berry"])
print(*fruits)

# * "pop" removes an element
fruits.pop()
print(*fruits)

print(fruits.pop(2))
print(*fruits)

# * Iterate through a list
for x in fruits:
    print(x)