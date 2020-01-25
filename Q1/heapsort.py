
from sys import stdin

def heapify(arr, length, idx):
	if idx < 0 or length <= 1 or idx > (length - 2) // 2:
		return
	left, right, prior = 2 * idx + 1, 2 * idx + 2, idx
	if right < length and arr[right] < arr[idx]:
		prior = right
	if arr[left] < arr[prior]:
		prior = left
	if prior != idx:
		arr[idx], arr[prior] = arr[prior], arr[idx]
		heapify(arr, length, prior)

def sort(arr, length):
	# Heapify
	for i in range((length - 2) // 2, -1, -1):
		heapify(arr, length, i)
	sortedArr = []
	for i in range(length):
		sortedArr.append(arr[0])
		arr[0] = arr[length - i - 1]
		heapify(arr, length - i - 1, 0)
	return sortedArr

length = int(stdin.readline().strip())

if length > 0:
	arr = [int(i) for i in stdin.readline().strip().split(' ')]

	# def check(arr, length):
	# 	for i in range(1, length):
	# 		if arr[i] < arr[i - 1]:
	# 			return False
	# 	return True
	# print(check(sort(arr, length), length))

	print(" ".join([str(i) for i in sort(arr, length)]))
