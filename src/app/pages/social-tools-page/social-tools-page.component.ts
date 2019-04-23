import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-tools-page',
  templateUrl: './social-tools-page.component.html',
  styleUrls: ['./social-tools-page.component.scss'],
})
export class SocialToolsPageComponent implements OnInit {

  isShowDropMenu = false;

  constructor() { }

  ngOnInit() {
  }

  showDropMenu() {
    if (this.isShowDropMenu) {
      this.isShowDropMenu = false;
    } else {
      this.isShowDropMenu = true;
    }
  }
}
