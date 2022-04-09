import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightQuote]'
})
export class HighlightQuoteDirective {

  constructor(private elem: ElementRef) {
    elem.nativeElement.style.backgroundColor = 'skyblue  '
   }

}
