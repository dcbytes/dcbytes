import { Pipe, type PipeTransform } from "@angular/core";

@Pipe({ name: "firstKey", standalone: true })
export class FirstKeyPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform(value: any): string | undefined {
    return Object.keys(value)?.[0];
  }
}

