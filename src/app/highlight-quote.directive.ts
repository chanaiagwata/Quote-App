// to be used once the upvote/downvote feature is introduced
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightQuote]'
})
export class HighlightQuoteDirective {

  constructor(private elem: ElementRef) {
    elem.nativeElement.style.backgroundColor = '#F5D3C8'
   }

}
