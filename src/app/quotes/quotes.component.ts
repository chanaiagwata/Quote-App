import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quote[] =[
    new Quote(1, 'First quote', 0, 0),
    new Quote(2, 'Second quote', 0, 0),
    new Quote(3, 'Third quote', 0, 0),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
