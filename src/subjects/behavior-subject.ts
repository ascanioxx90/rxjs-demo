import { BehaviorSubject } from 'rxjs';

export class BehaviorSubjectDemo {
  public static main() {
    const subject = new BehaviorSubject<string>('Hi there!');

    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });

    subject.next('Hello World!');

    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });

    subject.next('Hello Again!');
  }
}
