import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resolution'
})
export class ResolutionPipe implements PipeTransform {

  transform(value: any, w: number, h: number  ): any {
  	var res = value.replace("100x100", w+'x'+h);
    return res;
  }

}
