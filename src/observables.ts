import { Observable } from 'rxjs';

export class ObservablesDemo {
  public static main() {
    // OBSERVABLE AS PRODUCER
    const observable = new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
      }, 1000);
      setTimeout(() => {
        subscriber.error('OOPS!');
        subscriber.complete();
      }, 2000);
    });

    console.log('just before subscribe');

    // OBSERVER AS CONSUMER
    observable.subscribe({
      next: (x) => console.log('got value ' + x),
      error: (err) => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    });
    console.log('just after subscribe');
  }
}
