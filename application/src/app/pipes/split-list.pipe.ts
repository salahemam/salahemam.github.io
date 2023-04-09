
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'listFirstPart'})
export class ListFirstPart implements PipeTransform {
  transform(list: any[]): any[] {
    let len: number = list.length;
    return list.slice(0, len / 2);
  }
}

@Pipe({name: 'listLastPart'})
export class ListLastPart implements PipeTransform {
  transform(list: any[]): any[] {
    let len: number = list.length;
    return list.slice(len / 2, len);
  }
}