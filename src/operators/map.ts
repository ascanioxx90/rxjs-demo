import { map, Observable } from 'rxjs';

export class MapDemo {
  public static main() {
    const values = new Observable<number>((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      subscriber.complete();
    });
    values
      .pipe(map((values: number) => values * values))
      .subscribe((values: number) => console.log(values));
  }
}
