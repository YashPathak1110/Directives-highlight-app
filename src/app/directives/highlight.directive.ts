import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @HostListener("mouseover") 
  onMouseOver() {
    this.highlight("pink");
  }

  @HostListener("mouseout") 
  onMouseOut() {
    this.highlight("");
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
