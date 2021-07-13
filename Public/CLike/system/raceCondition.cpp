#include <stdio.h>
#include <pthread.h>

int counter = 0;


void compute()
{
    counter ++;
    printf("Counter value: %d\n",counter);
} 

int main()
{
    pthread_t thread1, thread2;

    pthread_create(&thread1, NULL, compute, NUll);
    pthread_create(&thread2, NULL, compute, NUll);

    pthread_join(thread1, NULL);
    pthread_join(thread2, NULL);
   return 0;
}