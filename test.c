#include <stdio.h>
#include <string.h>


int main(int argc, char **argv){
    printf("There are %d CLAs, they are:\n\n",argc);
    for(int i=0,i<argc,i+=1){
        printf("\n");
        for(int j=0,n=strlen(argv+i);j<n;j+=1){
            printf("%c",*(argv+i)+j);
        }
    }
    getch();
    return 0;
}