#include <stdio.h>

int main()
{
    char name[100];
    int age;

    printf("Enter your age and your name: ");
    scanf("%d %s", &age, name);

    printf("Your age is: %d. Your name is %s\n", age, name);

    //Data types
    int intVar = -4;
    long int longIntVar = 100000000L;
    short int shortIntVar = 2;          //this is quicker than int
    float floatVar = 17.71;
    double doubleVar = 2.4e+10;
    _Bool boolVar = 1;
    enum primaryColor {red, yellow, blue};
    enum primaryColor myColor, otherColor;
    myColor = blue;
    int newInt = 5;
    char myName = 'Tdog';

    return 0;
}
