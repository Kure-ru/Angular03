import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @HostBinding('style.color') color: string = 'black';
  @HostBinding('style.fontSize') fontSize: string = '1.3rem';

  constructor() {}

  ngOnInit(): void {}

  @HostListener('mouseenter') mouseEnterEvent(eventData: Event) {
    this.color = 'magenta';
    this.fontSize = '1.8rem';
  }

  @HostListener('mouseleave') mouseLeaveEvent(eventData: Event) {
    this.color = 'black';
    this.fontSize = '1.3rem';
  }
}
