import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input()
  defaultColor: string = 'transparent';

  @Input()
  highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor')
  backgroundColor: string;

  @HostListener('mouseenter') mouseover(event: Event){
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color',this.highlightColor);
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(event: Event){
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color',this.defaultColor);
    this.backgroundColor = this.defaultColor;
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    console.log(this.backgroundColor);
    console.log(this.defaultColor);


  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue');
    this.backgroundColor = this.defaultColor;
    //console.log('on init'+this.defaultColor);

  }

}
