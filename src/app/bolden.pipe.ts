import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bolden'
})
export class BoldenPipe implements PipeTransform {

  transform(value: string): any{
    return 'Repo Name: ' + value;
  }

}
