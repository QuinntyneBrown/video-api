import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./video-editor.component.html"),
    styles: [require("./video-editor.component.scss")],
    selector: "video-editor"
})
export class VideoEditorComponent implements OnInit { 
    ngOnInit() {

    }
}
