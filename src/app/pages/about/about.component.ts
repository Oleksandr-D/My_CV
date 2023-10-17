import { Component, OnInit, HostListener } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public isMobileScreen!: boolean;

  public url = 'https://drive.google.com/file/d/1MF1rYf5qpSTZIUZIOwTO1Qc6-88v3E-W/view?usp=sharing';
 
  public videoLinks: SafeResourceUrl[] = [
    this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/9_tyC7ZjrXM?si=KmDBx2vHPeH4nwlM'),
    this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/0qhz0TQwOug?si=_MM8cQ3R9q8zVNDv'),
    this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/IsiqpLrP818?si=dPYIMjDWfHIAIgSP'),
  ];

  constructor(private sanitizer: DomSanitizer) {
    this.checkScreenSize();
  }

  ngOnInit(): void {}

  shouldAutoplay() {
    return !this.isMobileScreen;
  }

  checkScreenSize() {
    this.isMobileScreen = window.innerWidth < 1026;
  }

  
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  @HostListener('window:scroll', ['$event'])
  
  onScroll() {
    this.handleScroll('.edu-scroll', '.lerning-scroll');
    this.handleScroll('.ex-scroll', '.inv-scroll');
    this.handleScroll('.cr-scroll', '.le-scroll');
  }

  private handleScroll(h1Selector: string, pSelector: string) {
    const h1Element = document.querySelector(h1Selector) as HTMLElement;
    const pElement = document.querySelector(pSelector) as HTMLElement;
    const windowWidth = window.innerWidth;

    if (h1Element && pElement && windowWidth > 310 ) {
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

  toTop():void{
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }
  
}
