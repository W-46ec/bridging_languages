
// quicksort.cpp

#include <iostream>

using namespace std;

int partition(long arr[], int low, int high) {
	long pivot = arr[low];
	while (low < high) {
		while (low < high && arr[high] >= pivot)
			high--;
		arr[low] = arr[high];
		while (low < high && arr[low] <= pivot)
			low++;
		arr[high] = arr[low];
	}
	arr[low] = pivot;
	return low;
}

void quickSort(long arr[], int low, int high) {
	if (low < high) {
		int pivot = partition(arr, low, high);
		quickSort(arr, low, pivot - 1);
		quickSort(arr, pivot + 1, high);
	}
}

// bool isSorted(long arr[], int length) {
// 	for (int i = 1; i < length; i++) {
// 		if (arr[i] < arr[i - 1])
// 			return false;
// 	}
// 	return true;
// }

int main() {
	int length = 0;
	cin >> length;
	long *arr = new long[length];
	for (int i = 0; i < length; i++) {
		cin >> arr[i];
	}
	quickSort(arr, 0, length - 1);
	for (int i = 0; i < length; i++) {
		if (i < length - 1)
			cout << arr[i] << " ";
		else
			cout << arr[i] << endl;
	}
	// cout << isSorted(arr, length) << endl;
	delete [] arr;
	return 0;
}
