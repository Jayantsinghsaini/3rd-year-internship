// Find the Duplicate Number: Given an array of n+1 elements in the range of 1 to n, write a function to find the duplicate number
public class Main {
    public static void main(String[] args) {
        int[] arr = {1,2,3,3,4,5};
        func(arr);

    }

    public static void func(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    System.out.println( arr[j] );
                }}}}}
