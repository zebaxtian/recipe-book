import { 
    Directive, 
    HostListener, 
    ElementRef, 
    Renderer2, 
    OnInit,
    HostBinding
} from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen: boolean = false;

    constructor(){}

    @HostListener('click', ['$event']) onClick (event: Event) {
        this.isOpen = !this.isOpen;
    }
}   