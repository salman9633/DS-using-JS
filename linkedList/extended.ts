

import { LinkedList } from './sample';


class average extends LinkedList{

    average():number{
    console.log(this.sum(),'lllll');
    console.log(this.size,';;;;;;;;;');
    
    
        return this.sum()/this.size
    }


}

const list=new average()

console.log("avg:",list.average());
