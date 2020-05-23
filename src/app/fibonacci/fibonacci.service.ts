import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export const LIMIT = 200;


@Injectable({
  providedIn: 'root'
})
export class FibonacciService {

  private _fibonacci: number[];

  constructor() {
  }

  generateFibonacci(): Observable<number[]> {
    this._fibonacci = [];
    return of(this.fibonacci(0, 1));
  }

  fibonacci(sub: number, last: number): number[] {
    if (sub <= LIMIT && last > 0) {
      sub = sub + last;
      this._fibonacci.push(sub);
      return this.fibonacci(last, sub);
    } else
      return this._fibonacci;
  }
}
