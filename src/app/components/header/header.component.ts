import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
public isMobileScreen!: boolean;
public isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  mobileMenu(){
    this.isOpen = !this.isOpen
  }

  toTop():void{
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }

  playNavSound(){
    const nameSound = document.getElementById('sound') as HTMLAudioElement;
    if (nameSound && !this.isMobileScreen) {
      nameSound.volume = 0.1;
      nameSound.play();
    }
  }

  stopNavSound() {
    const stopSound = document.getElementById('sound') as HTMLAudioElement;
    if (stopSound) {
      stopSound.pause();
      stopSound.currentTime = 0;
    }
  }
}
