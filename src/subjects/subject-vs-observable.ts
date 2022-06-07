import { BehaviorSubject, Observable } from 'rxjs';

export class SubjectVsObservableDemo {
  public static main() {
    const observable = new Observable((subscriber) => {
      subscriber.next(Math.random());
    });

    console.log('=====USING OBSERVABLE=====');
    observable.subscribe((value) => console.log(`ObserverA: ${value}`));
    observable.subscribe((value) => console.log(`ObserverB: ${value}`));

    console.log('=====USING SUBJECT=====');
    const subject = new BehaviorSubject<number>(Math.random());
    subject.subscribe((value) => console.log(`ObserverA: ${value}`));
    subject.subscribe((value) => console.log(`ObserverB: ${value}`));
  }
}
