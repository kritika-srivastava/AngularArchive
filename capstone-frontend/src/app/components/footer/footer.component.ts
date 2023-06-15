import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  timestamp = '';
  constructor() { }

  currentTime() {

    let str = "", min = "", sec = "", hr = "";

    let currentTime = new Date()
    let hours = currentTime.getHours()
    let minutes = currentTime.getMinutes()
    let seconds = currentTime.getSeconds()


    if (minutes < 10) {
      min = "0" + minutes;
    }
    else {
      min = "" + minutes;
    }
    if (seconds < 10) {
      sec = "0" + seconds;
    }
    else {
      sec = "" + seconds;
    }
    str += "Time: " + hours + ":" + min + ":" + sec + " ";

    this.timestamp = str;
  }


  ngOnInit(): void {
    setTimeout(() => { this.ngOnInit() }, 100 * 10);
    this.currentTime();
  }

}
