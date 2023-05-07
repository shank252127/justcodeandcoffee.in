import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

// Constants
import { HEADER_DATA } from '../configs/header.config';
import { BREAKPOINT_VIEW } from 'global-styles/global-constants.config';
import { Direction } from '@angular/cdk/bidi';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headerData = HEADER_DATA;
  mobTabStyleActive = false;
  // Mobile - Tablet Menu;
  activeHamburger = false;
  dir: Direction = 'ltr';
  @Output() menuOpened: EventEmitter<void> | undefined;
  @Output() menuClosed: EventEmitter<void> | undefined;
  constructor(public breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([BREAKPOINT_VIEW.TAB_MOB_BP])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.mobTabStyleActive = true;
        } else {
          this.mobTabStyleActive = false;
        }
      });
  }

  ngOnInit(): void {}

  openHamburger(): void {
    this.activeHamburger = !this.activeHamburger;
  }
}
