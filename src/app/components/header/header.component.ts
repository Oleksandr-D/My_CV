import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
}
