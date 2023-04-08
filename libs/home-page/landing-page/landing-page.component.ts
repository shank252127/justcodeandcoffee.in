import { Component, OnInit } from '@angular/core';
import { INTRO_DATA } from '../configs/landing-pabe.config';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  introSectionData = INTRO_DATA;
  constructor() {}

  ngOnInit(): void {}
}
