import { Component, OnInit } from '@angular/core';
import { FOOTER_DATA } from '../configs/footer.config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  footerData = FOOTER_DATA;
  constructor() {}

  ngOnInit(): void {}
}
