import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "replace" })
export class ReplacePipe implements PipeTransform {
  transform(value: string, replacing: string): string {
    return value.replace(replacing, "****");
  }
}
