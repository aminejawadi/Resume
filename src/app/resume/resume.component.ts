import { Component, OnInit, HostListener } from '@angular/core';
import { debounce } from '../core/utils';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css', './resume.component.responsivity.css']
})
export class ResumeComponent implements OnInit {

  isSticky = false;
  activeSection: string;

  pageYOffset = 0;
  pageXOffset: number;

  constructor() {
    this.checkResize();
  }

  @HostListener('window:scroll')
  @debounce()
  checkScroll() {
    this.pageYOffset = window.pageYOffset;
    this.isSticky = pageYOffset >= 250;
  }

  @HostListener('window:resize')
  @debounce(25)
  checkResize() {
    this.pageXOffset = window.innerWidth;
  }

  ngOnInit(): void { }

  @debounce(150)
  onViewport(isOnViewPort: any, element?: string) {
    this.activeSection = element;
  }
}
