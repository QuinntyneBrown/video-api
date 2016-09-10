import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./video-edit-page.component.html"),
    styles: [require("./video-edit-page.component.scss")],
    selector: "h-video-edit-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoEditPageComponent implements OnInit { 
    ngOnInit() {

    }
}
