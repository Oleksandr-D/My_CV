import {
  Component,
  OnInit
} from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})


export class AboutComponent implements OnInit {

  public url = 'https://drive.google.com/file/d/1pcG3iBhHl-D2aBDo-sTIx7VaV_YXyOgc/view?usp=sharing';

  constructor() {}

  ngOnInit(): void {}
 

}