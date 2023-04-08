import { Component, OnInit } from '@angular/core';
// Constants
import { HEADER_DATA } from '../configs/header.config';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerData = HEADER_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
