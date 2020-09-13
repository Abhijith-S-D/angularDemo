import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { MyServiceService } from "../my-service.service";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent implements OnInit {
  @Output()
  itemClicked: EventEmitter<string> = new EventEmitter();

  constructor(private myService: MyServiceService) {}

  ngOnInit() {}

  sendCLickEvent = (itemName: string) => {
    // this.itemClicked.emit(itemName);
    this.myService.updateTitle(itemName);
  };
}
