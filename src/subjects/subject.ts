import { Subject } from 'rxjs';

export class SubjectDemo {
  public static main() {
    const subject = new Subject<string>();

    // Lost value since subscribed after emission
    subject.next('Hi there!');

    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });
    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });

    subject.next('Hello World!');
  }
}
