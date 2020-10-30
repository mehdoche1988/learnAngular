import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[horrorBorderCard]'
})



export class BorderCardDirective {

    private initialColor: string = '#f5f5f5';
    private defaultColor: string = '#eb0942';
    private defaultHeight: number = 300;

    constructor(private el: ElementRef) {
        this.setBorder(this.initialColor);
        this.setHeight(this.defaultHeight);
    }

    @Input('horrorBorderCard') borderColor: string;

    @HostListener('mouseenter') onMouseEnter() {
        this.setBorder(this.borderColor || this.defaultColor);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.setBorder(this.initialColor);
    }
    private setBorder(color: string) {
        let border = 'solid 4px ' + color;
        this.el.nativeElement.style.border = border;
    }

    private setHeight(height: number) {
        this.el.nativeElement.style.height = height + 'px';
    }
}