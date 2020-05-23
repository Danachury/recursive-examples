import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export const LIMIT = 38;
export const SCALAR = 2;


@Injectable({
  providedIn: 'root'
})
export class Example1Service {

  private _series: number[] = [];

  constructor() {}

  generateSeries(): Observable<number[]> {
    this._series = [];
    return of(this.generateSeriesSync());
  }

  generateSeriesSync(): number[] {
    return this._calcSeries(0);
  }

  private _calcSeries(last: number): number[] {
    if (last <= LIMIT) {
      last = last + SCALAR;
      this._series.push(last);
      return this._calcSeries(last);
    } else
      return this._series;
  }
}
