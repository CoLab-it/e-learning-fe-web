import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
  standalone:true
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, limit: number): string {
    if (!value) return '';
    let words = value.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return value;
  }

}
