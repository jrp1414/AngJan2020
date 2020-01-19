import { Directive, OnInit, ElementRef, Input, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[better-highlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input('better-highlight') defaultColor: string;
  @Input() highlightColor: string;
  @HostBinding("style") style;

  ngOnInit(): void {
    // this.el.nativeElement.style.backgroundColor = this.defaultColor;
    // this.render.setStyle(this.el.nativeElement,"background-color",this.defaultColor);
    this.style = { "background-color": "aliceblue", "color": "blue" };
  }

  constructor(private el: ElementRef, private render: Renderer2) { }

  @HostListener("mouseenter") onMouseEntered() {
    // this.render.setStyle(this.el.nativeElement,"background-color",this.highlightColor);
    // this.backgroundColor = this.highlightColor;
  }

  @HostListener("mouseleave") onMouseLeave() {
    // this.render.setStyle(this.el.nativeElement,"background-color",this.defaultColor);
    // this.backgroundColor = this.defaultColor;
  }

}
