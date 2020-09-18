import { Pipe, PipeTransform } from "@angular/core";
import { Chat } from "./model/chat.model";

@Pipe({
  name: "searchPipe",
  pure: false
})
export class SearchPipePipe implements PipeTransform {
  transform(list: Chat[], key: string): any {
    return list.filter((chat: Chat) => {
      return chat.text.toLowerCase().indexOf(key.toLowerCase()) >= 0;
    });
  }
}
