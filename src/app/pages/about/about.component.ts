import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  public url = 'https://drive.google.com/file/d/142BuwRYpHZuy9LUp-xFG0CKxeS83Uc9A/view?usp=drive_link';

  constructor() {}

  ngOnInit(): void {}

}
