import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'getIdFromUrl'})
export class MovieUrlToIdPipe implements PipeTransform {
  transform(url: string): number {
    const urlArray = url.split('/');
    return +urlArray[urlArray.length-2];
  }
}