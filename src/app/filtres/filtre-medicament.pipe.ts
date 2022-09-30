import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtreMedicament'
})
export class FiltreMedicamentPipe implements PipeTransform {

  transform(objs:any, term:any): any {
    if (term === undefined) {
    return objs;
    }
    return objs.filter((obj)=> {
    return ((obj.nomCom.toLowerCase().includes(term.toLowerCase())||(obj.dci.toLowerCase().includes(term.toLowerCase())))
  
    )

    })
    }

}
