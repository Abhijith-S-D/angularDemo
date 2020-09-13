import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { MyServiceService } from "../my-service.service";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.scss"],
})
export class MainPageComponent
  implements
    OnInit,
    DoCheck,
    AfterViewInit,
    AfterViewChecked,
    AfterContentInit,
    AfterContentChecked,
    OnDestroy,
    OnChanges {
  title = "demo";

  @ViewChild("h1Tag", { static: true })
  h1Tag: ElementRef<HTMLElement>;

  @ContentChild("para", { static: true })
  pTag: ElementRef<HTMLElement>;

  list = [1,2,3,4,5];

  constructor(private myService: MyServiceService) {
    console.log("I'm in constructor");
  }

  ngOnInit() {
    console.log("I'm in ngOnInit");
    this.myService.title.subscribe((newTitle: string) => {
      this.title = newTitle;
    });
    this.title = "goobe";
    console.log(this.h1Tag.nativeElement.innerHTML);
    console.log(this.pTag.nativeElement.innerHTML);
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log("I'm in ngDoCheck");
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("I'm in ngAfterViewInit");
    console.log(this.h1Tag.nativeElement.innerHTML);
    console.log(this.pTag.nativeElement.innerHTML);
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log("I'm in ngAfterViewChecked");
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log("I'm in ngAfterContentInit");
    console.log(this.h1Tag.nativeElement.innerHTML);
    console.log(this.pTag.nativeElement.innerHTML);
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log("I'm in ngAfterContentChecked");
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("I'm in ngOnDestroy");
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("I'm in ngOnChanges");

  }
}
