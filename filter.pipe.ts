import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false //when data added to array, pipe recalculating. might be bad for performance!
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filteringString: string, propName: string): any {
    if(value.length === 0 || filteringString === ''){
      return value;
    }
    const resultArray = [];
    for(const item of value){
      //if(item[propName] === filteringString){
      if(item[propName].includes(filteringString)){
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
