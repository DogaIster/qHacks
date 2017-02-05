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
      height: 60em;
      background: url("../img/background.jpeg") no-repeat scroll 0px 100% / cover transparent;
    }
    .space {
      height : 24em;
    }
    .space-2 {
      height : 23em;
    }
    .heading {
      font-size: 60px;
      color: white;
    }
    .section3 {
      padding-top : 30px;
    }
    .text-black {
      color: black;
    }
    .text-white {
      color: white;
    }
    .icons {
      padding-top: 80px;
    }
    #footer {
      margin-top : 100px;
      text-align : center;
      margin-bottom : 35px;
    }
    `],
})
export class AboutComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
