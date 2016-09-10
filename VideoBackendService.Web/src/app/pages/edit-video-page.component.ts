import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./edit-video-page.component.html"),
    styles: [require("./edit-video-page.component.scss")],
    selector: "h-edit-video-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditVideoPageComponent implements OnInit { 
    ngOnInit() {

    }
}
