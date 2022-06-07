import { Subject } from 'rxjs';

export interface Message {
  sender: string;
  message: string;
}

export class GreetingsDemo {
  public static main() {
    const subject = new Subject<Message>();

    subject.subscribe({
      next: (v) => {
        if (v.sender === 'B') {
          console.log(`observer${v.sender} said ${v.message}`);
        }
      },
    });

    subject.subscribe({
      next: (v) => {
        if (v.sender === 'A') {
          console.log(`observer${v.sender} said ${v.message}`);
          subject.next({ sender: 'B', message: 'Hello!' });
        }
      },
    });

    subject.next({ sender: 'A', message: 'Hello!' });
  }
}
