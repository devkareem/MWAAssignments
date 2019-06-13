import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multi'
})
export class MultiPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result:string='';
    for(let i=0;i<args;i++){
      result+=" "+value;
    }
    return result;
  }

}
