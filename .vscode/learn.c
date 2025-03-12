#include<stdio.h>
#include<conio.h>
 int main()
 {
    int n;
    do{

        printf(" enter a number: \n");
        scanf(" %d", &n);
        printf("%d \n", n);
        
            if (n % 2 !=0)
            {
                break;
            }
    }
    while (1);
    printf("Thank You \n");

    return 0;


 }