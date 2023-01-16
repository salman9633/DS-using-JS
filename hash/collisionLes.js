class hashTable{

    constructor(size){
        this.table=new Array(size)
        this.size=size
    }

    hash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
            total+=key.charCode(i)
        }
        return total%this.size
    }

    set(key,value){
        const index=this.hash(key)
        // this.table[index]=value
        const bucket=this.table[index]
        if(!bucket){
            bucket=[[key,value]]
        }else{
            const sameKeyItem=bucket.find(item=>item[0]==key)
            if(sameKeyItem){
                sameKeyItem[1]=value
            }else{
                bucket.push(key,value)
            }
        }
    }

    get(key){
        const index=this.hash(key)
        // return this.table[index]
    }

    remove(key){
        const index=this.hash(key)
        this.table[index=undefined]
    }

    dispaly(){
        for(let i=0;i<this.table.length;i++){
            if(this.table){
                console.log(i,this.table[i]);
            }
            
        }
    }
}