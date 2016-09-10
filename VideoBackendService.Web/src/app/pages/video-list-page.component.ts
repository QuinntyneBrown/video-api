import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./video-list-page.component.html"),
    styles: [require("./video-list-page.component.scss")],
    selector: "video-list-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoListPageComponent implements OnInit { 
    ngOnInit() {

    }
}
