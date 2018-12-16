#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>




int main()
{
    double width = 5.0;
    double length = 2.7;
    double perimeter;
    double area;
    enum colors {red, blue, yellow, green, orange};
    enum colors rectangleColor;

    perimeter = 2.0 * (width + length);
    area = width * length;
    rectangleColor = green;

    printf("Perimeter: %f\n", perimeter);
    printf("Area: %f\n", area);
    printf("Color value: %i", rectangleColor);


    if (width > length) {
        printf("Width is greater than length\n");
    }

    //If statement syntax. Note elseif is intuitive from this.
    //Determine odd or even
    printf("Enter a number to check odd or even: ");
    int number_to_test;
    scanf("%i", &number_to_test);

    if (number_to_test % 2 == 0) {
        printf("The number is even!\n");
    } else {
        printf("The number is odd!\n");
    }

    //ternary
    int x;
    int y = 15;
    x = y > 7 ? 25 : 50;
    printf("\nx was set to %i\n", x);


    //for loop
    for (int i = 0; i <= 10; i++) {
        printf("Index: %i\n", i);
    }

    //while loop
    int whileControl = 10;
    while (whileControl >= 0) {
        printf("Countdown: %i\n", whileControl);
        whileControl--;
    }

    //do while loop
    int doControl = 0;
    do {
        printf("Counting up this time: %i\n", doControl);
        doControl++;
    }
    while(doControl <= 10);


    //Arrays
    int unusedArrayToShowHowToInitialize[5] = {2, 3, 5, 2, 7};
    int seeAboveButDifferent[100] = {2, 3, 1};  //Sets first three to those numbers, but the rest to 0;
    int myNumbers[5];
    int count = 10;
    int sum = 0;
    float average = 0.0f;

    myNumbers[0] = 3;
    myNumbers[1] = 5;
    myNumbers[2] = 500;
    myNumbers[3] = 10;
    myNumbers[4] = 11;

    for (int i = 0; i < sizeof(myNumbers)/sizeof(myNumbers[0]); i++) {
        printf("The number is: %i, and the index is %i\n", myNumbers[i], i);
    }


    //multidimensional arrays
    int array2d[2][5];      //2 rows 3 columns
    int array2dInitialized[3][4] = {
        {10, 20, 30, 40},
        {15, 25, 35, 45},
        {47, 48, 49, 50}
    };

        //Can also do 3, 4, .. n dimensional as well. Definition/initialization:
            //11 minute mark, section 8 lecture 49 of c programming for beginners udemy course
            //https://bnymellon.udemy.com/c-programming-for-beginners-/learn/v4/t/lecture/8795274?start=0


    //Functions
        //Remember to add function prototypes to top [int returnANumber();] if needing to use that function within others
    printSum(3, 4);
    printf("The returned result is: %i\n", returnSum(5, 9));

    return 0;
}

void printSum(int x, int y)
{
    int result = x + y;
    printf("The sum is: %i\n", result);
}
int returnSum(int x, int y) {
    int result = x + y;
    return result;
}
