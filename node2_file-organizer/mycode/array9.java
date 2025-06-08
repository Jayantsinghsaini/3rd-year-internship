//  Find the Missing Number: Given an array of n-1 elements in the range of 1 to n, write a function to find the missing number.
public class Main {
    public static void main(String[] args) {
        int arr[] ={1,2,3,5,6};
        int arrsum = 0;
        for (int i = 0; i < arr.length; i++) {
            arrsum = arrsum + arr[i];
        }
        int n = arr.length + 1;
        int sumofnumber = n * (n + 1) / 2; // sum of number 1 to n
        int num = sumofnumber - arrsum;
        System.out.println( "missing element = " + num);
    }}
