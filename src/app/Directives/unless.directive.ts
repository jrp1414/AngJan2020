import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[unless]'
})
export class UnlessDirective {

  constructor(private templateRef:TemplateRef<any>,private containerRef:ViewContainerRef) { }

  @Input("unless") set value(condition:boolean){
    if(condition){
      this.containerRef.clear();
    }else{
      this.containerRef.createEmbeddedView(this.templateRef);
    }
  }
}
