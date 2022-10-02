import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custpipe'
})
export class CustpipePipe implements PipeTransform {

  transform(value: unknown): unknown {
    if(value!="" && value!= undefined && value!=null){
      return value;
    }else{
      return 'NA';
    }

  }

}
