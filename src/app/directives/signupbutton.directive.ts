import { Directive ,ElementRef,Renderer2} from "@angular/core";

@Directive({
    selector:'[signupbutton]',
    standalone:true,
})

export class SignupButtonDirective{
    constructor(private el: ElementRef, private renderer : Renderer2){
        this.renderer.setStyle(this.el.nativeElement, 'background-color', '#2e3f46');
        this.renderer.setStyle(this.el.nativeElement, 'width', '100px');
        this.renderer.setStyle(this.el.nativeElement, 'height', '40px');
        this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
        this.renderer.setStyle(this.el.nativeElement, 'font-weight', '600');
        this.renderer.setStyle(this.el.nativeElement, 'border-radius', '10px');
        this.renderer.setStyle(this.el.nativeElement, 'display', 'inline-block'); 
    }


}