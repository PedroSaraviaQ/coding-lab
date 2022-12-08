
# * "count"
print([3, 6, 3, 3, 1, 3].count(3))

# * "index"
print([2, 7, 1, 9, 3].index(9))

# * "join" works for iterables
print(" ".join(["I", "like", "Webtoon"]))
print("...".join("123"))

# * "sort" vs "sorted"
numbers = [2, 3, 1]
print(sorted(numbers), numbers)
print(sorted(numbers, reverse=True), numbers)
print(numbers.sort(), numbers)

# * "reverse" vs "reversed"
print([*reversed(numbers)], numbers)
print(numbers.reverse(), numbers)

print(numbers[::-1])  # * You can also use slicing for reversing
