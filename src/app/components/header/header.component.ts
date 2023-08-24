import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
public isMobileScreen!: boolean;
public isOpen = false;

  constructor() { 
    this.checkScreenSize();
  }

  ngOnInit(): void {
  }

  mobileMenu(){
    this.isOpen = !this.isOpen
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobileScreen = window.innerWidth < 1026;
  }

  toTop():void{
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }

  playNavSound(){
    // const nameSound = document.getElementById('sound') as HTMLAudioElement;    
    // if (nameSound && !this.isMobileScreen) {
    //   nameSound.volume = 0.5;
    //   nameSound.play();
    // }
  }

}
