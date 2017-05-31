import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import * as Facebook from "nativescript-facebook";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;

    constructor(private routerExtensions: RouterExtensions) {
    }

    ngOnInit(): void {
    }

    //TODO: static 'that' approach must be removed when nativescript-facebook plugin is fixed
    onLoginFacebook(eventData: Facebook.LoginEventData) {
        if (!eventData.error) {
            this.routerExtensions.navigate(["/home"], { clearHistory: true });
        }
    }

    onSignIn() {
    }
}
