import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public isMobileScreen!: boolean;

  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.playVideoAndAudio();
  }

  @HostListener('window:click', ['$event'])
  onClick(event: MouseEvent) {
    this.playVideoAndAudio();
  }

  playVideoAndAudio() {
    const video = document.querySelector('.background-video') as HTMLVideoElement;
    const audio = document.querySelector('audio') as HTMLAudioElement;
    if (video && audio && !this.isMobileScreen) {
      video.play();
      audio.play();
    }
  }

  checkScreenSize() {
    this.isMobileScreen = window.innerWidth < 1026;
  }

  shouldAutoplay() {
    return !this.isMobileScreen;
  }

  playHoverSound() {
    const hoverSound = document.getElementById('hover-sound') as HTMLAudioElement;
    if (hoverSound && !this.isMobileScreen) {
      hoverSound.volume = 0.02;
      hoverSound.play();
    }
  }

  stopHoverSound() {
    const stopSound = document.getElementById('hover-sound') as HTMLAudioElement;
    if (stopSound) {
      stopSound.pause();
      stopSound.currentTime = 0;
    }
  }

  playNameSound(){
    const nameSound = document.getElementById('name-sound') as HTMLAudioElement;
    if (nameSound && !this.isMobileScreen) {
      nameSound.volume = 0.3;
      nameSound.play();
    }
  }

  stopNameSound() {
    const stopSound = document.getElementById('name-sound') as HTMLAudioElement;
    if (stopSound) {
      stopSound.pause();
      stopSound.currentTime = 0;
    }
  }

}
