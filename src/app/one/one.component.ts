import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-one",
  templateUrl: "./one.component.html",
  styleUrls: ["./one.component.scss"],
})
export class OneComponent implements OnInit {
  param: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: any) => {
      this.param = params.params.name;
      console.log(params.params);

    });
  }

  goTwo(){
    this.router.navigate(['two']);
  }
}
