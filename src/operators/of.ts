import { Observable, of } from 'rxjs';

export class OfDemo {
  public static main() {
    const values: Observable<number[]> = of([1, 2, 3, 4]);
    values.subscribe({
      next: (values: number[]) => console.log(values),
      complete: () => console.log('COMPLETED'),
    });
  }
}
