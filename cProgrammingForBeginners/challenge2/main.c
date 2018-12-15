#include <stdio.h>
#include <stdlib.h>

int main()
{
    double width = 5.0;
    double length = 2.7;
    double perimeter;
    double area;

    perimeter = 2.0 * (width + length);
    area = width * length;

    printf("Perimeter: %f\n", perimeter);
    printf("Area: %f\n", area);

    return 0;
}
