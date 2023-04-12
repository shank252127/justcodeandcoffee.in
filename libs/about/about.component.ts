import { Component, OnInit } from '@angular/core';
import { ABOUT_DATA } from './configs/about.config';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  introSectionData = ABOUT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
