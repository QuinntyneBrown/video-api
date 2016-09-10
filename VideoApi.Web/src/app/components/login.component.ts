import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./login.component.html"),
    styles: [require("./login.component.scss")],
    selector: "h-login",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit { 
    ngOnInit() {

    }
}
