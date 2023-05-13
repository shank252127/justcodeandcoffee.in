import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { NavigationExtras, Router } from '@angular/router';
// Constants
import { HEADER_DATA } from '../configs/header.config';
import { BREAKPOINT_VIEW } from 'global-styles/global-constants.config';
import { Direction } from '@angular/cdk/bidi';
import { MatMenuPanel } from '@angular/material/menu';
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
  dir: Direction = 'rtl';
  subMenu: any;
  routerParameter: NavigationExtras;

  constructor(
    public breakpointObserver: BreakpointObserver,
    private route: Router
  ) {
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

  setNestedMenuData(isNested: boolean, id: any): void {
    if (isNested) {
      this.subMenu = this.headerData.NESTED_MENU[id];
    } else {
      this.subMenu = [];
    }
    // console.log(this.menuData);
  }

  navigateTo(route) {
    const data = { key: 'value' };
    const extras: NavigationExtras = {
      state: {
        data,
      },
    };
    this.route.navigate([route], extras);
  }
}
