import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public url = 'https://drive.google.com/file/d/142BuwRYpHZuy9LUp-xFG0CKxeS83Uc9A/view?usp=drive_link';

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  
  onScroll() {
    this.handleScroll('.edu-scroll', '.lerning-scroll');
    this.handleScroll('.ex-scroll', '.inv-scroll');
  }

  private handleScroll(h1Selector: string, pSelector: string) {
    const h1Element = document.querySelector(h1Selector) as HTMLElement;
    const pElement = document.querySelector(pSelector) as HTMLElement;

    if (h1Element && pElement) {
      const h1Offset = h1Element.getBoundingClientRect().top;
      const pOffset = pElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (h1Offset < windowHeight - 100) {
        h1Element.classList.add('scrolled-left');
      } else {
        h1Element.classList.remove('scrolled-left'); 
      }

      if (pOffset < windowHeight - 100) {
        pElement.classList.add('scrolled');
      } else {
        pElement.classList.remove('scrolled');
      }
    }
  }
}
