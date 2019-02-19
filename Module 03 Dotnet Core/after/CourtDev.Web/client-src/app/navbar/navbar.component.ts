import {Component, OnDestroy, OnInit} from '@angular/core';
import {BroadcastService} from "@azure/msal-angular";
import {MsalService} from "@azure/msal-angular";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'cd-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public userInfo: any = null;
  public loggedIn : boolean;
  private subscription: Subscription;
  public isIframe: boolean;
  constructor(private broadcastService: BroadcastService , private authService : MsalService) {
    this.isIframe = window !== window.parent && !window.opener;
    if(this.authService.getUser()) {
      this.loggedIn = true;
    } else {
     this.loggedIn = false;
   }
  }

  login()
  {
    debugger;
    console.log("IN");
    this.authService.loginPopup(["user.read" ,"api://a88bb933-319c-41b5-9f04-eff36d985612/access_as_user"]);
  }

  logout()
  {
   this.authService.logout();
  }


  ngOnInit() {
    this.broadcastService.subscribe("msal:loginFailure", (payload) => {
      console.log("login failure " + JSON.stringify(payload));
      this.loggedIn = false;

    });

    this.broadcastService.subscribe("msal:loginSuccess", (payload) => {
      console.log("login success " + JSON.stringify(payload));
      this.loggedIn = true;
    });

  }

 ngOnDestroy() {
    this.broadcastService.getMSALSubject().next(1);
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
