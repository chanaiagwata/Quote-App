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
    new Quote(1, 'The future belongs to those who believe in the beauty of their dreams.', 26, 10, 'Titus Kamwira', 'Eleanor Roosevelt', new Date),
    new Quote(2, 'Tell me and I forget. Teach me and I remember. Involve me and I learn.', 39, 14, 'Elvice Oduor', 'Benjamin Franklin', new Date()),
    new Quote(3, 'It is during our darkest moments that we must focus to see the light.', 110, 14, 'Anabelle Majiwa', '-Aristotle', new Date()),
    new Quote(4, 'Hardware: The parts of a computer system that can be kicked.', 100, 4, 'Clinton Maina', 'Jeff Pesis', new Date()),
    new Quote(5, 'The trouble with programmers is that you can never tell what a programmer is doing until it’s too late..', 90, 64, 'John Doe', 'Seymour Cray:', new Date()),
    new Quote(6, 'If it keeps up, man will atrophy all his limbs but the push-button finger.', 40, 35, 'Rechael Wandithia', 'Frank Lloyd Wright', new Date()),

    
  ]
  // condition to highlight quote with highest upvotes
  arr:number[] = this.quotes.map(
  function (quote){
    return quote.upvote
  });
  highest = Math.max(...this.arr)
  // add new quote
  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  // vote quote
  // upvoting(i:number){
  //   this.quotes[i].upvote++;  
  // }
  // downvoting(index:number){
  //   this.quotes[index].downvote++
  // }

 // delete quote
  completeQuote(isComplete: any, i: number){
    if (isComplete){
      this.quotes.splice(i,1);
    }
  }
  // show description
  toggleDescription(i:any){
    this.quotes[i].description = !this.quotes[i].description;
  }
  constructor() { }

  ngOnInit(): void {

   }
}
 