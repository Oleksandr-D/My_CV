import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  toTop():void{
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollY = window.scrollY || window.pageYOffset;
    const projectWrappers = document.querySelectorAll('.project-wraper');
  
    projectWrappers.forEach((wrapper: Element) => {
      if (scrollY >= 50 && wrapper.classList.contains('one')) {
        wrapper.classList.add('scroll-active');
      } else if (scrollY >= 160 && wrapper.classList.contains('two')) {
        wrapper.classList.add('scroll-active');
      } else if (scrollY >= 450 && wrapper.classList.contains('three')) {
        wrapper.classList.add('scroll-active');
      } else {
        wrapper.classList.remove('scroll-active');
      }
    });
  }
  
}
