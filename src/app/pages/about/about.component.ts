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

  public url = 'https://drive.google.com/file/d/1kvnij_k35EKFIREdFiO5otlkWH-EcVnQ/view?usp=sharing';

  constructor() {}

  ngOnInit(): void {}


}
