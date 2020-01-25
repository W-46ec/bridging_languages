
// mergesort.js

var readline = require('readline')

function merge(arr, low, mid, high) {
	if (low >= high)
		return
	let tmp = [], i = low, j = mid + 1
	while (i <= mid && j <= high) {
		if (arr[i] <= arr[j]) {
			tmp.push(arr[i++])
		} else {
			tmp.push(arr[j++])
		}
	}
	while(i <= mid)
		tmp.push(arr[i++])
	while(j <= high)
		tmp.push(arr[j++])
	for (let i = low; i <= high; i++) {
		arr[i] = tmp[i - low]
	}
}

function mergeSort(arr, low, high) {
	if (low >= high)
		return
	let mid = parseInt((low + high) / 2)
	mergeSort(arr, low, mid)
	mergeSort(arr, mid + 1, high)
	merge(arr, low, mid, high)
}

function sort(arr) {
	return mergeSort(arr, 0, arr.length - 1)
}

// function isSorted(arr) {
// 	for (let i = 1; i < arr.length; i++) {
// 		if (arr[i] < arr[i - 1]) {
// 			return false
// 		}
// 	}
// 	return true
// }

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
})

rl.on('line', (line) => {
	let length = parseInt(line.split('\n')[0])
	rl.on('line', (line) => {
		arr = line.split(' ').map(x => parseInt(x))
		sort(arr)
		console.log(arr.join(' '))
	})
})

