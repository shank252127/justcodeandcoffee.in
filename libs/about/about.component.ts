import { Component, OnInit } from '@angular/core';
import { ABOUT_DATA } from './configs/about.config';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagramSquare,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  introSectionData = ABOUT_DATA;

  //Icons;
  icons: any = {
    linkedInIcon: faLinkedin,
    gitHubIcon: faGithub,
    instagramIcon: faInstagramSquare,
  };

  constructor() {}

  ngOnInit(): void {}
}
