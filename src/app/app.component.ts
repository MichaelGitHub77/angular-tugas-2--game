import { FunctionCall } from "@angular/compiler";
import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  public items: any[][];
  x = null;
  y = null;
  a = 0;
  constructor() {
    this.items = [
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"]
    ];
  }
  Input() {
    this.x = this.x * 1;
    this.y = this.y * 1;
    var win1 = 0;
    var win2 = 0;

    for (var i = 0; i < 5; i++) {
      win1 = 0;
      win2 = 0;
      for (var j = 0; j < 5; j++) {
        if (this.items[i][j] == 1) {
          win1++;
        }
        if (this.items[i][j] == 2) {
          win2++;
        }
        if (win1 == 4) {
          alert("player 1 win");
          this.Reset();
          break;
        }
        if (win2 == 4) {
          alert("player 2 win");
          this.Reset();
          break;
        }
      }
    }

    for (var j = 0; j < 5; j++) {
      win1 = 0;
      win2 = 0;
      for (var i = 0; i < 5; i++) {
        if (this.items[i][j] == 1) {
          win1++;
        }
        if (this.items[i][j] == 2) {
          win2++;
        }
        if (win1 == 4) {
          alert("player 1 win");
          this.Reset();
          break;
        }
        if (win2 == 4) {
          alert("player 2 win");
          this.Reset();
          break;
        }
      }
    }

    if (this.x < 5 && this.y < 5) {
      if (this.a % 2 == 0) {
        if (
          this.items[this.x][this.y] != 1 &&
          this.items[this.x][this.y] != 2
        ) {
          this.items[this.x][this.y] = "1";
        } else {
          alert("error");
        }
      }
      if (this.a % 2 == 1) {
        if (
          this.items[this.x][this.y] != 1 &&
          this.items[this.x][this.y] != 2
        ) {
          this.items[this.x][this.y] = "2";
        } else {
          alert("error");
        }
      }
    } else {
      alert("error");
    }
    this.a++;
  }
  Reset() {
    this.items = [
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"]
    ];
  }
}
