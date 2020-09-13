import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  title: Subject<string> = new Subject();

  updateTitle = (newTitle: string) => {
    this.title.next(newTitle);
  }
}
