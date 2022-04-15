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
    new Quote(1, 'The future belongs to those who believe in the beauty of their dreams.', 0, 0, 'Titus Kamwira', 'Eleanor Roosevelt', new Date()),
    new Quote(2, 'Tell me and I forget. Teach me and I remember. Involve me and I learn.', 0, 0, 'Elvice Oduor', 'Benjamin Franklin', new Date()),
    
  ]
  lastNum!: number;
  startNum!: number;
  addition!: number;
  // condition to highlight quote with highest upvotes
  // arr:number[] = this.quotes.map(
  // function (quote){
  //   return quote.upvote
  // });
  // highest = Math.max(...this.arr)
  // add new quote
  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  // vote quote
  upvoteClick(i:any){
    this.quotes[i].upvote++;
  }
  downvoteClick(i:any){
    this.quotes[i].downvote++
  }
  // Get highest upvoted quote
  highest(){
    this.startNum = 0;
    this.lastNum = 0;
   for (this.addition = 0; this.addition<this.quotes.length; this.addition++){
     this.lastNum = this.quotes[this.addition].upvote;
     if(this.lastNum>this.startNum){
       this.startNum =this.lastNum;
     }
   }
   return this.startNum;
  }

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
 