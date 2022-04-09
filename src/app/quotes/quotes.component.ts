import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
// use quote class to get values to be displayed in quotes.component html
export class QuotesComponent implements OnInit {
  quotes:Quote[] =[
    new Quote(1, 'First quote', 0, 0),
    new Quote(2, 'Second quote', 0, 0),
    new Quote(3, 'Third quote', 0, 0),
  ]
  // condition to return quote with highest upvotes
  arr:number[] = this.quotes.map(
  function (quote){
    return quote.upvote
  }
  )
  highest = Math.max(...this.arr)

  constructor() { }

  ngOnInit(): void {
  }

}
