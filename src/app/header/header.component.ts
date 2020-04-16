import { Subscription } from '../../../node_modules/rxjs';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  /**
  * Do onLoad of page functionality.  
  * @returns void
  */
  ngOnInit(): void {

  }

  

  /**
  * This method is called to open/close the sidebar and 
  * make the changes in the width and the margin of the screen.
  * @returns void
  */
  openCloseNav(): void {
    if (document.getElementById('sidebar').style.marginLeft != '-232px') {
      document.getElementById('main').style.width = '116%';
      document.getElementById('sidebar').style.marginLeft = '-232px';
      document.getElementById('header').style.marginLeft = '232px';
      document.getElementById('main').style.marginLeft = '-232px';

    } else {
      document.getElementById('main').style.width = '';
      document.getElementById('sidebar').style.marginLeft = '';
      document.getElementById('header').style.marginLeft = '';
      document.getElementById('main').style.marginLeft = '';
    }
  }

//   /**
// * This method is called to open reporting server in new tab.
// * @returns void
// */
//   onNavigate(): void {
//     window.open(environment.reportUrl, UNDERSCORE_BLANK);
//   }

  /**
  * This method calls the service to get Action,reason and status
  * @returns void
  */
  // getARSInfo(): void {
  //   this.roleAccessSubscription = this.commonService.getARSInfo().subscribe(details => {
  //     this.commonService.actionReasonStatusInfo = details;
  //   });
  // }
  // /**
  // * This event is called internally by angular to do garbage collection.
  // * This is used to clear the toaster if any and unsubcribe the subcription before leaving the page.
  // * @returns void
  // */
  // ngOnDestroy(): void {
  //   this.roleAccessSubscription.unsubscribe();
  // }
}
