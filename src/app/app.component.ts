import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Example1Service } from './example-1/example-1.service';
import { FibonacciService } from './fibonacci/fibonacci.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Recursive Examples';
  series: Observable<number[]>;
  fibonacci: Observable<number[]>;

  constructor(private _example1Service: Example1Service,
              private _fibonacciService: FibonacciService) {}

  ngOnInit(): void {
    this.series = this._example1Service.generateSeries();
    this.fibonacci = this._fibonacciService.generateFibonacci();
  }
}
