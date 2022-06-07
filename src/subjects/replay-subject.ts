import { ReplaySubject } from 'rxjs';

export class ReplaySubjectDemo {
  public static main() {
    const subject = new ReplaySubject<string>();

    subject.next('Hi there!');
    subject.next('Hello World!');

    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });
    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });

    subject.next('Hello Again!');
  }
}
