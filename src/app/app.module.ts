import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { RepeatingBoxesComponent } from "./repeating-boxes/repeating-boxes.component";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [BrowserModule, FormsModule, FlexLayoutModule],
  declarations: [AppComponent, HelloComponent, RepeatingBoxesComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
