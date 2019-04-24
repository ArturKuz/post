import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class HeaderComponent implements OnInit {

  isShowMenu = false;
 
   constructor() { }

  ngOnInit() {
  }

  showMenu() {
    if (this.isShowMenu) {
      this.isShowMenu = false;
    } else {
      this.isShowMenu = true;
    }
  }
 
}
