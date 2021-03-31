import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  columns = 2;
  boxes = ["Ant", "Beetle", "Cricket", "DragonFly"];
  spaceBetween = 10;

  onBoxClicked(index) {
    this.boxes.splice(index, 1);
  }
}
