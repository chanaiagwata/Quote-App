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
    new Quote(1, 'The future belongs to those who believe in the beauty of their dreams.', 0, 0, 'Titus Kamwira', 'Eleanor Roosevelt', new Date),
    new Quote(2, 'Tell me and I forget. Teach me and I remember. Involve me and I learn.', 0, 0, 'Elvice Oduor', 'Benjamin Franklin', new Date()),
    new Quote(3, 'It is during our darkest moments that we must focus to see the light.', 0, 0, 'Anabelle Majiwa', '-Aristotle', new Date()),
  ]
  // condition to highlight quote with highest upvotes
  arr:number[] = this.quotes.map(
  function (quote){
    return quote.upvote
  });
  highest = Math.max(...this.arr)
  
  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  completeQuote(isComplete: any, index: number){
    if (isComplete){
      this.quotes.splice(index,1);
    }
  }
  toggleDescription(index:any){
    this.quotes[index].description = !this.quotes[index].description;
  }
  constructor() { }

  ngOnInit(): void {

   }
}
 