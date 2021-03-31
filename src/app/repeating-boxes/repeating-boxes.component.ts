import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-repeating-boxes",
  templateUrl: "./repeating-boxes.component.html",
  styleUrls: ["./repeating-boxes.component.css"]
})
export class RepeatingBoxesComponent implements OnInit {
  @Input() boxArray = ["A", "B", "C"];
  @Input() spaceBetween = 10;
  @Output() boxClicked: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onBoxClicked(index) {
    console.log("box " + index + " was clicked!");
    this.boxClicked.emit(index);
  }
}
