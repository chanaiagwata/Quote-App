import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-description',
  templateUrl: './quote-description.component.html',
  styleUrls: ['./quote-description.component.css']
})
export class QuoteDescriptionComponent implements OnInit {
  @Input()
  quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteComplete(complete:any){
    this.isComplete.emit(complete);
  }
  // upvoteClick(){
  //   this.quote.upvote ++;
  // }
  // downvoteClick(){
  //   this.quote.downvote ++;
  // }
  // upvoteClick(){
  //   this.quote[i].upvotes
  // }
  constructor() { }

  ngOnInit() {
  }

}
