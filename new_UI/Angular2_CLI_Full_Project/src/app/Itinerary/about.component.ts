import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styles: [`
    body, html {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(255, 252, 248);
    }
    .mainpg{

      margin: 0;
      padding: 0;
    }
    .cover{
      color: rgb(255, 255, 255);
      position: relative;
      height: 75em;
      background: url("../img/background.jpeg") no-repeat scroll 0px 100% / cover transparent;
    }
    `],
})
export class AboutComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
