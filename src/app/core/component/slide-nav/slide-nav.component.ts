import { Component, Input, Output, EventEmitter, HostListener, ElementRef, ViewChild } from '@angular/core';
import { slideInOutAnimation } from '../animate/animate-triger'
@Component({
  selector: 'slide-nav',
  templateUrl: './slide-nav.component.html',
  styleUrls: ['./slide-nav.component.scss'],
  animations: [slideInOutAnimation]
})

export class SlideNavComponent {
  @Input('open') open: boolean = false
  @Output('sideState') state = new EventEmitter()
  @ViewChild('slideBar') slideBar?: ElementRef

  constructor() {

  }

  scope(event: MouseEvent) {
    const target: HTMLElement = <HTMLElement>event.target;
    const clickedInside = this.slideBar?.nativeElement.contains(target);
    if (!clickedInside) {
      this.close()
    }
    
    if (target.classList.contains('linkScope')) {
      this.close()      
    }
  }



  close() {
    this.open = false
    this.state.emit(false)

  }
}
