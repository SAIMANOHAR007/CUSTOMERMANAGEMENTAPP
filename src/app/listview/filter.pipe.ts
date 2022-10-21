import {Pipe, PipeTransform} from '@angular/core'
import { User } from '../user';


@Pipe({
    name:'filteruser'
})
export class FilterPipe implements PipeTransform{
    transform(users:User[],filterText:string) {
        if(users.length===0||filterText===''){
            return users;
        }else{
           return users.filter((users) =>
        
            {return users.name.toLowerCase() === filterText.toLowerCase()}) 
        }
        
    }


}