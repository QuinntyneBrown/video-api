import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./video-list.component.html"),
    styles: [require("./video-list.component.scss")],
    selector: "video-list"
})
export class VideoListComponent implements OnInit { 
    ngOnInit() {

    }
}
